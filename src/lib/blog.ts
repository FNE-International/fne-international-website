import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

// Category labels mapping
export const categoryLabels: Record<string, string> = {
  'stories': 'Stories',
  'updates': 'Updates',
  'events': 'Events',
  'impact-reports': 'Impact Reports',
};

// Category colors for badges
export const categoryColors: Record<string, { bg: string; text: string }> = {
  'stories': { bg: 'bg-emerald-100', text: 'text-emerald-800' },
  'updates': { bg: 'bg-blue-100', text: 'text-blue-800' },
  'events': { bg: 'bg-orange-100', text: 'text-orange-800' },
  'impact-reports': { bg: 'bg-purple-100', text: 'text-purple-800' },
};

// Format date for display
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Format date as relative time (e.g., "2 days ago")
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

// Get category label from slug
export function getCategoryLabel(slug: string): string {
  if (!slug) return 'Stories';
  return categoryLabels[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
}

// Get category colors
export function getCategoryColors(slug: string): { bg: string; text: string } {
  if (!slug) return { bg: 'bg-emerald-100', text: 'text-emerald-800' };
  return categoryColors[slug] || { bg: 'bg-gray-100', text: 'text-gray-800' };
}

// Truncate text to a certain length
export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Get all blog posts (sorted by date, excluding drafts in production)
export async function getBlogPosts(options?: {
  category?: string;
  limit?: number;
  includeDrafts?: boolean;
}): Promise<BlogPost[]> {
  const { category, limit, includeDrafts = false } = options || {};

  let posts = await getCollection('blog', ({ data }) => {
    // Filter out drafts in production
    if (!includeDrafts && data.draft) return false;
    // Filter by category if specified
    if (category && data.category !== category) return false;
    return true;
  });

  // Sort by publish date (newest first)
  posts = posts.sort((a, b) => {
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
  });

  // Limit results if specified
  if (limit) {
    posts = posts.slice(0, limit);
  }

  return posts;
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getCollection('blog');
  return posts.find(post => post.slug === slug);
}

// Get all unique categories from posts
export async function getCategories(): Promise<string[]> {
  const posts = await getCollection('blog');
  const categories = new Set<string>();

  posts.forEach(post => {
    if (post.data.category) {
      categories.add(post.data.category);
    }
  });

  return Array.from(categories);
}

// Get related posts (same category, excluding current)
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<BlogPost[]> {
  const posts = await getBlogPosts({ category });
  return posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Format post data for frontmatter
export function formatFrontmatter(data: {
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  category: string;
  featured?: boolean;
  featuredImage?: string;
  featuredImageAlt?: string;
  draft?: boolean;
}): string {
  const lines = [
    '---',
    `title: "${data.title.replace(/"/g, '\\"')}"`,
    `excerpt: "${data.excerpt.replace(/"/g, '\\"')}"`,
    `author: "${data.author.replace(/"/g, '\\"')}"`,
    `publishDate: "${data.publishDate}"`,
    `category: "${data.category}"`,
    `featured: ${data.featured || false}`,
  ];

  if (data.featuredImage) {
    lines.push(`featuredImage: "${data.featuredImage}"`);
  }
  if (data.featuredImageAlt) {
    lines.push(`featuredImageAlt: "${data.featuredImageAlt.replace(/"/g, '\\"')}"`);
  }
  lines.push(`draft: ${data.draft || false}`);
  lines.push('---');

  return lines.join('\n');
}
