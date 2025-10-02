import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Accepts either a Date or ISO date string in the frontmatter
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
