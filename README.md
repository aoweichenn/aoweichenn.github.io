# Aowei / Notes

Source for [aoweichenn.github.io](https://aoweichenn.github.io/), a Vue 3 + VitePress blog about Nova's design, implementation, and validation.

The site is built with the open-source [VitePress](https://vitepress.dev/) framework. Nova's implementation repository remains private; published articles cover public project direction and prototype status.

## Local development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

To check the production output:

```sh
npm run build
npm run preview
```

The build generates static pages, `sitemap.xml`, and `feed.xml` under `docs/.vitepress/dist/`.

## Write a post

Create `docs/posts/<slug>.md` with frontmatter:

```md
---
title: Article title
date: '2026-10-27'
description: One-sentence summary.
tags: [Nova, 设计]
---

# Article title

<PostMeta date="2026-10-27" :tags="['Nova', '设计']" />

Article text...
```

The post appears automatically on the homepage, in the archive, in local search, and in the RSS feed. Keep the `date` as a quoted `YYYY-MM-DD` string.

## Deployment

GitHub Actions builds the site on pushes to `main` and deploys it to GitHub Pages. The Pages source is **GitHub Actions**; the workflow is [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
