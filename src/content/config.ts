import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    publishDate: z.string(),
    category: z.enum(['stories', 'updates', 'events', 'impact-reports']),
    featured: z.boolean().default(false),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
