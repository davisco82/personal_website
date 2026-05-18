import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    stack: z.array(z.string()),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
        external: z.boolean().optional(),
      })
    ),
  }),
});

const labs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/labs",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    releaseDate: z.date().optional(),
    stack: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          external: z.boolean().optional(),
        })
      )
      .optional(),
  }),
});

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const downloads = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/downloads",
  }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["tool", "music-pack"]),
    description: z.string(),
    format: z.string().optional(),
    version: z.string().optional(),
    href: z.string(),
    ctaLabel: z.string().default("Open"),
    external: z.boolean().default(false),
    order: z.number().default(999),
  }),
});

const musicReleases = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/music-releases",
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["mix", "track"]),
    description: z.string(),
    youtubeUrl: z.string(),
    duration: z.string().optional(),
    releaseDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(["released", "coming-soon"]).default("coming-soon"),
  }),
});

export const collections = {
  projects,
  labs,
  posts,
  downloads,
  musicReleases,
};
