import { useStoryblokApi, type ISbStoryData } from '@storyblok/astro';

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

// Blog post interface
export interface BlogPostContent {
  title: string;
  slug: string;
  featured_image: {
    filename: string;
    alt?: string;
  };
  excerpt: string;
  author_name: string;
  author_image?: {
    filename: string;
    alt?: string;
  };
  publish_date: string;
  category: string;
  content: unknown;
  featured?: boolean;
}

export interface BlogPost extends ISbStoryData {
  content: BlogPostContent;
}

// Fetch all blog posts
export async function fetchBlogPosts(options?: {
  page?: number;
  perPage?: number;
  category?: string;
  featured?: boolean;
}): Promise<{ posts: BlogPost[]; total: number }> {
  const storyblokApi = useStoryblokApi();
  const { page = 1, perPage = 10, category, featured } = options || {};

  const filterQuery: Record<string, unknown> = {};

  if (category) {
    filterQuery['category'] = { in: category };
  }

  if (featured !== undefined) {
    filterQuery['featured'] = { is: featured };
  }

  const { data, total } = await storyblokApi.get('cdn/stories', {
    version: import.meta.env.DEV ? 'draft' : 'published',
    starts_with: 'blog/',
    is_startpage: false,
    sort_by: 'content.publish_date:desc',
    per_page: perPage,
    page,
    filter_query: Object.keys(filterQuery).length > 0 ? filterQuery : undefined,
  });

  return {
    posts: data.stories as BlogPost[],
    total: total || 0,
  };
}

// Fetch a single blog post by slug
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const storyblokApi = useStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version: import.meta.env.DEV ? 'draft' : 'published',
    });

    return data.story as BlogPost;
  } catch {
    return null;
  }
}

// Fetch all categories
export async function fetchCategories(): Promise<string[]> {
  const { posts } = await fetchBlogPosts({ perPage: 100 });
  const categories = new Set<string>();

  posts.forEach(post => {
    if (post.content.category) {
      categories.add(post.content.category);
    }
  });

  return Array.from(categories);
}

// Get related posts (same category, excluding current)
export async function fetchRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<BlogPost[]> {
  const { posts } = await fetchBlogPosts({ category, perPage: limit + 1 });

  return posts
    .filter(post => post.slug !== `blog/${currentSlug}`)
    .slice(0, limit);
}

// Truncate text to a certain length
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Get optimized image URL from Storyblok
export function getOptimizedImageUrl(
  filename: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'png' | 'jpg';
  }
): string {
  if (!filename) return '';

  const { width, height, quality = 80, format = 'webp' } = options || {};

  let url = filename;
  const transforms: string[] = [];

  if (width || height) {
    transforms.push(`${width || 0}x${height || 0}`);
  }

  if (transforms.length > 0 || quality !== 100 || format !== 'webp') {
    // Storyblok image service format
    url = `${filename}/m/${transforms.join('/')}/filters:format(${format}):quality(${quality})`;
  }

  return url;
}
