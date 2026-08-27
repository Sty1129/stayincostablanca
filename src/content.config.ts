import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/blog',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Stay in Costa Blanca'),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
