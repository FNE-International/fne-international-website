import type { APIRoute } from 'astro';

// This route needs to run on the server
export const prerender = false;

// Storyblok Management API base URL
const STORYBLOK_MAPI = 'https://mapi.storyblok.com/v1';

interface MailchimpCampaign {
  id: string;
  settings: {
    subject_line: string;
    preview_text: string;
    title: string;
  };
  archive_url: string;
  send_time: string;
}

interface MailchimpCampaignContent {
  plain_text: string;
  html: string;
}

// Extract campaign ID from URL or return as-is if already an ID
function extractCampaignId(input: string): string {
  // If it's a mailchi.mp URL, extract the ID
  const mailchimpUrlMatch = input.match(/mailchi\.mp\/([a-f0-9]+)/i);
  if (mailchimpUrlMatch) {
    return mailchimpUrlMatch[1];
  }

  // If it's a campaign report URL
  const reportUrlMatch = input.match(/[?&]id=([a-f0-9]+)/i);
  if (reportUrlMatch) {
    return reportUrlMatch[1];
  }

  // Otherwise assume it's already a campaign ID
  return input.trim();
}

// Fetch campaign details from Mailchimp
async function getMailchimpCampaign(campaignId: string, apiKey: string): Promise<MailchimpCampaign | null> {
  const dc = apiKey.split('-')[1];

  // First, try direct lookup by campaign ID
  let response = await fetch(`https://${dc}.api.mailchimp.com/3.0/campaigns/${campaignId}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  if (response.ok) {
    return response.json();
  }

  // If that fails and the ID looks numeric, it might be a web_id
  // Search all campaigns to find the matching one
  if (/^\d+$/.test(campaignId)) {
    console.log('Numeric ID detected, searching by web_id...');
    const searchResponse = await fetch(`https://${dc}.api.mailchimp.com/3.0/campaigns?count=1000`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (searchResponse.ok) {
      const data = await searchResponse.json();
      const campaign = data.campaigns?.find((c: { web_id: number }) => c.web_id.toString() === campaignId);
      if (campaign) {
        console.log('Found campaign by web_id:', campaign.id);
        return campaign;
      }
    }
  }

  console.error('Failed to fetch Mailchimp campaign:', await response.text());
  return null;
}

// Fetch campaign content from Mailchimp
async function getMailchimpCampaignContent(campaignId: string, apiKey: string): Promise<MailchimpCampaignContent | null> {
  const dc = apiKey.split('-')[1];
  const response = await fetch(`https://${dc}.api.mailchimp.com/3.0/campaigns/${campaignId}/content`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch Mailchimp campaign content:', await response.text());
    return null;
  }

  return response.json();
}

// Convert HTML to Storyblok richtext format (simplified)
function htmlToRichtext(html: string): object {
  // Strip HTML tags for now and create paragraphs
  const text = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();

  const paragraphs = text.split(/\n\n+/).filter(p => p.trim());

  return {
    type: 'doc',
    content: paragraphs.map(p => ({
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: p.trim(),
        },
      ],
    })),
  };
}

// Convert HTML to plain text for excerpt
function htmlToPlainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200);
}

// Get or create the blog folder in Storyblok
async function getBlogFolderId(accessToken: string, spaceId: string): Promise<number | null> {
  // First, try to find existing blog folder
  const searchResponse = await fetch(`${STORYBLOK_MAPI}/spaces/${spaceId}/stories?with_slug=blog`, {
    headers: {
      'Authorization': accessToken,
    },
  });

  if (searchResponse.ok) {
    const data = await searchResponse.json();
    const blogFolder = data.stories?.find((s: { slug: string; is_folder: boolean }) =>
      s.slug === 'blog' && s.is_folder
    );
    if (blogFolder) {
      return blogFolder.id;
    }
  }

  // If no blog folder exists, create one
  const createResponse = await fetch(`${STORYBLOK_MAPI}/spaces/${spaceId}/stories`, {
    method: 'POST',
    headers: {
      'Authorization': accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      story: {
        name: 'Blog',
        slug: 'blog',
        is_folder: true,
        default_root: 'blog_post',
      },
    }),
  });

  if (createResponse.ok) {
    const data = await createResponse.json();
    return data.story?.id || null;
  }

  console.error('Failed to create blog folder');
  return null;
}

// Create a blog post in Storyblok
async function createStoryblokPost(
  title: string,
  excerpt: string,
  content: object,
  publishDate: string,
  accessToken: string,
  spaceId: string
): Promise<{ success: boolean; slug?: string; error?: string }> {
  // Get the blog folder ID
  const blogFolderId = await getBlogFolderId(accessToken, spaceId);

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 50);

  const story = {
    story: {
      name: title,
      slug: slug,
      parent_id: blogFolderId || 0, // Use blog folder if found, otherwise root
      content: {
        component: 'blog_post',
        title: title,
        slug: slug,
        excerpt: excerpt,
        content: content,
        publish_date: publishDate.split('T')[0], // Just the date part
        category: 'updates',
        author_name: 'FNE International',
        featured: false,
      },
    },
    publish: 1, // Auto-publish
  };

  const response = await fetch(`${STORYBLOK_MAPI}/spaces/${spaceId}/stories`, {
    method: 'POST',
    headers: {
      'Authorization': accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(story),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to create Storyblok story:', errorText);
    return { success: false, error: errorText };
  }

  const result = await response.json();
  return { success: true, slug: result.story?.slug };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { campaign, password } = body;

    // Verify admin password
    const adminPassword = import.meta.env.ADMIN_PASSWORD;
    if (!adminPassword || password !== adminPassword) {
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get environment variables
    const mailchimpApiKey = import.meta.env.MAILCHIMP_API_KEY;
    const storyblokToken = import.meta.env.STORYBLOK_MANAGEMENT_TOKEN;
    const storyblokSpaceId = import.meta.env.STORYBLOK_SPACE_ID;

    if (!mailchimpApiKey || !storyblokToken || !storyblokSpaceId) {
      return new Response(JSON.stringify({ error: 'Server not configured. Missing API keys.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Extract campaign ID
    const campaignId = extractCampaignId(campaign);
    if (!campaignId) {
      return new Response(JSON.stringify({ error: 'Invalid campaign ID or URL' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Fetch campaign from Mailchimp
    const campaignData = await getMailchimpCampaign(campaignId, mailchimpApiKey);
    if (!campaignData) {
      return new Response(JSON.stringify({ error: 'Campaign not found in Mailchimp. Check the ID.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Fetch campaign content (use campaignData.id, not the input which might be a web_id)
    const content = await getMailchimpCampaignContent(campaignData.id, mailchimpApiKey);
    if (!content) {
      return new Response(JSON.stringify({ error: 'Could not fetch campaign content' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create blog post
    const title = campaignData.settings.subject_line || campaignData.settings.title;
    const excerpt = campaignData.settings.preview_text || htmlToPlainText(content.html);
    const richtext = htmlToRichtext(content.html);
    const publishDate = campaignData.send_time || new Date().toISOString();

    const result = await createStoryblokPost(
      title,
      excerpt,
      richtext,
      publishDate,
      storyblokToken,
      storyblokSpaceId
    );

    if (!result.success) {
      return new Response(JSON.stringify({ error: `Failed to create post: ${result.error}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: `Created blog post: "${title}"`,
      slug: result.slug,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Import error:', error);
    return new Response(JSON.stringify({ error: 'Server error. Check logs.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
