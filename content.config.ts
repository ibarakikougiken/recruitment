import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    contents: defineCollection({
      type: "page",
      source: "contents/*.md",
      schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        draft: z.boolean(),
        tags: z.array(z.string()),
      }),
    }),
  },
});
