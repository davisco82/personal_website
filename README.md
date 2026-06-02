# DaVisco Personal Website

Astro-based personal website for DaVisco Entertainment. The site combines:

- a public portfolio/homepage,
- a music hub,
- project pages,
- posts / devlogs,
- downloadable tools and music packs.

The site is built as a static Astro app and uses Astro Content Collections as the source of truth for most editorial content.

## Stack

- Astro
- Tailwind CSS v4 via `@tailwindcss/vite`
- Markdown content collections

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - build production output
- `npm run preview` - preview the build locally

## Project Structure

- `src/pages` - route files and page layouts
- `src/components` - reusable UI components
- `src/content` - content collections stored as Markdown
- `public/images` - static images and logos
- `src/styles/global.css` - shared styling and page-specific visual systems

## Content Collections

The site uses Astro content collections defined in [`src/content.config.ts`](./src/content.config.ts).

Current collections:

- `posts` - blog entries and devlogs
- `projects` - game and app/tool project data
- `downloads` - downloadable tools and music packs
- `musicReleases` - music releases, tracks, and mixes
- `labs` - lab / experimental items

Each collection is validated by schema, so frontmatter must match the defined fields.

## Posts Workflow

Posts are stored as Markdown files in [`src/content/posts`](./src/content/posts).

This is the expected workflow:

1. Create a new `.md` file in `src/content/posts`.
2. Add frontmatter that matches the `posts` schema.
3. Write the body content in Markdown.
4. Build the site.

Example post frontmatter:

```md
---
title: "My Post Title"
description: "Short summary for lists and previews."
pubDate: 2026-06-02
draft: false
tags: ["devlog", "release"]
---
```

Required fields:

- `title`
- `description`
- `pubDate`

Optional fields:

- `draft`
- `tags`

The posts index at [`src/pages/posts.astro`](./src/pages/posts.astro) and the homepage both read from `getCollection("posts")`, so new Markdown posts automatically appear after the next build.

## Music Hub

The `/music` page is designed as a two-mode hub:

- `DaVisco Background Music`
- `Music Projects`

Implementation notes:

- the top area is a clean hero on the page background, not a boxed card,
- `Background Music` includes:
  - logo,
  - headline,
  - description,
  - CTA buttons,
  - animated count-up stats,
  - `Featured Music Packs`,
  - `Latest Previews`,
- `Music Projects` is currently a placeholder structure for future original track / lyrics / mix content.

The music page intentionally keeps the first real card-like surfaces lower on the page, starting at `Featured Music Packs` and `Latest Previews`.

## Projects Page

The `/projects` page is structured similarly to `/music`:

- top hero on plain background,
- simple section navigation for `Games` and `Apps & Tools`,
- two content blocks below the hero.

`Games` currently uses a showcase-style card layout with:

- a large visual header,
- status badge,
- project logo,
- description,
- stack chips,
- action buttons.

`Apps & Tools` uses a more compact card style.

Project metadata is stored in Markdown files under [`src/content/projects`](./src/content/projects).

## Adding a New Post

To add a new post manually:

1. Create a new file in `src/content/posts`, for example `src/content/posts/my-new-post.md`.
2. Add valid frontmatter.
3. Write the Markdown body.
4. Run `npm run build` to verify the output.

## Notes

- The site is static-first. Content changes are expected to happen through Markdown files in the repository.
- The current workflow is intentionally simple: edit Markdown, build, deploy.
- If a more editorial workflow is needed later, a Git-based CMS can be added on top without changing the underlying Astro content model.
