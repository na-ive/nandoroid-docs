---
title: Site Development
description: Information about developing and contributing to the NAnDoroid documentation site.
sidebar:
  order: 3
---

Welcome to the meta-documentation! This page explains how the NAnDoroid documentation site is built and how you can contribute to it.

The source code for this site is hosted in [its own repository](https://github.com/na-ive/nandoroid-docs). We welcome pull requests and community contributions.

## Architecture & Hosting

This project leverages [Starlight](https://starlight.astro.build/), an excellent documentation theme powered by the [Astro](https://astro.build/) framework.

The live site is automatically deployed to GitHub Pages via GitHub Actions. The deployment workflow triggers whenever a push modifies files in these directories:
- `src/`
- `public/`

*(You can also trigger the workflow manually from the Actions tab).*

## Local Development Environment

If you want to test changes locally before committing, use the following commands:

| Command | Description |
| :--- | :--- |
| `npm install` | Install all required dependencies. |
| `npm run dev` | Launch the local development server (usually at `localhost:4321`). |
| `npm run build` | Compile the project into the `./dist/` directory for production. |
| `npm run preview` | Preview the compiled production build locally. |
| `npm run astro ...` | Execute Astro CLI tasks (e.g., `astro add`, `astro check`). |
| `npm run astro -- --help` | Display the Astro CLI help menu. |

:::tip[Missing Dependencies?]
If you encounter an error mentioning `vips/vips8: no such file or directory`, you may need to install `libvips` on your system. For example, on Arch Linux, you can resolve this by running: `sudo pacman -S libvips`
:::

:::caution[Local Link Behavior]
When running the site locally, Astro occasionally strips or mishandles the base URL. **Do not attempt to "fix" relative links** just because they return a 404 error on your local machine; doing so might break the links on the live GitHub Pages site. Always navigate to `http://localhost:4321/` instead of omitting the trailing slash.
:::

## Content Editing Guidelines

All documentation pages are written in Markdown (`.md` or `.mdx`) and reside in the `src/content/docs/` folder.

- **Updating `lastUpdated`**: When making significant changes to a page, you may manually update the `lastUpdated` field in the frontmatter (e.g., `lastUpdated: 2024-02-10`).
- **Markdown Flavors**: Starlight provides several custom extensions (like asides and tab components) that differ from standard GitHub Flavored Markdown. For a full list of features, consult the [Starlight Authoring Guide](https://starlight.astro.build/guides/authoring-content/).

## Useful Locations

- **HTML Pages**: Add standalone pages to `src/pages`.
- **Navigation Menu**: Edit the sidebar structure in `astro.config.mjs`.
- **Site Styling**: Tweak the colors and UI elements in `src/styles/custom.css`.
- **Landing Page**: Modify the hero section and features in `src/content/docs/index.mdx`.

:::caution[Capitalization in URLs]
Astro automatically converts uppercase letters in markdown filenames to lowercase and strips out periods (`.`) when generating routing paths. If you link to a file using its exact uppercase name instead of the simplified URL path, it will result in a broken link (404).
:::

## External References

- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build/)
- [Expressive Code](https://expressive-code.com/)
