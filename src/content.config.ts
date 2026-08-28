import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/blog',
  }),

  schema: z.object({
    /* =====================================================
       BASIC ARTICLE DATA
    ====================================================== */

    title: z.string(),

    description: z.string(),

    author: z
      .string()
      .default('Stay in Costa Blanca'),

    date: z.coerce.date(),


    /* =====================================================
       LANGUAGE
    ====================================================== */

    lang: z
      .enum(['ro', 'en', 'es'])
      .default('ro'),


    /* =====================================================
       TRANSLATIONS
       
       Same key = same article in different languages.
       
       Example:
       RO: protect-unoccupied-property
       EN: protect-unoccupied-property
       ES: protect-unoccupied-property
    ====================================================== */

    translationKey: z
      .string()
      .optional(),


    /* =====================================================
       CATEGORIES / TAGS
    ====================================================== */

    tags: z
      .array(z.string())
      .default([]),


    /* =====================================================
       DISPLAY
    ====================================================== */

    featured: z
      .boolean()
      .default(false),

    draft: z
      .boolean()
      .default(false),
  }),
});

export const collections = {
  blog,
};
