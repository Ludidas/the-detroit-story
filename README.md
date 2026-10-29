# The Detroit Story

Website for The Detroit Story: Real People. Real Stories. Real Detroit.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), hosted on Cloudflare Workers. The design follows mockup D: the Broadsheet layout in the Block Party colors.

## Running it locally

You need Node.js 24 or newer (Astro 7 won't run on older versions). If you use nvm, run `nvm use` in this folder.

```sh
npm install
npm run dev        # local site at http://localhost:4321, reloads as you edit
npm run build      # production build into ./dist
npm run preview    # serve the production build locally
npm run check      # type-check the project
```

## Where things live

```
src/
  styles/global.css       Colors, fonts, corner radii (the Tailwind theme)
  layouts/BaseLayout.astro  Page shell: <head>, header, footer
  components/             Header, footer, cards, story parts, Voices pop-up player, author card
  pages/                  One file per page
    stories/[slug].astro    A page per story
    stories/page/[page].astro  Stories list pages 2, 3, ... (page 1 is stories/index.astro)
    authors/[slug].astro    A profile page per author
  lib/content.ts          Every page gets its stories, authors, interviews and About text from here
  lib/types.ts            The shape of a Story, Author, Voice (interview) and the About page
  lib/site.ts             Instagram handle, interview hashtag and other site-wide settings
  lib/navigation.ts       Menu links
  lib/video.ts            Turns YouTube and Instagram links into embedded players
  lib/format.ts           Date formatting (Detroit time)
  data/placeholders.ts    Stand-in content until Sanity and Instagram are connected
public/                   Files served as-is (favicon)
wrangler.jsonc            Cloudflare Workers config
```

- To change a brand color or font, edit the `@theme` block in `src/styles/global.css`. Classes like `bg-brand` and `text-sun` update everywhere.
- Bracketed text such as `[Story headline goes here]` is placeholder content.
- Fill in the Instagram handle and interview hashtag in `src/lib/site.ts`.
- The Tell Your Story form doesn't send anything yet. Submitting shows a "not connected yet" note until the sending step is built.

## Deploying to Cloudflare

1. Push this folder to a GitHub repository.
2. In the Cloudflare dashboard, go to **Compute > Workers & Pages** and select **Create application**.
3. Under **Import a repository**, pick the GitHub repo.
4. Set the build command to `npm run build` and the deploy command to `npx wrangler deploy`.
5. Select **Save and Deploy**. The site goes live at a `workers.dev` address, and every push to the main branch redeploys it.

`wrangler.jsonc` tells Cloudflare to serve the built site from `./dist` and to use the custom 404 page. No Cloudflare adapter is needed while the site is fully static.

## What's next

1. Fill out the inner pages (story page, Stories list, About, Tell Your Story).
2. Connect Sanity so stories are published from its editor, and rebuild the site on publish.
3. Tell Your Story form: a server endpoint that emails submissions, with Cloudflare Turnstile against spam.
4. Voices of Detroit from Instagram: fetch tagged videos at build time, rebuild on a schedule, refresh the access token every 60 days.
5. Launch: custom domain, share previews, analytics.

## Copyright

© 2026 The Detroit Story. All rights reserved.

No license is granted to copy, modify or distribute this code. The Detroit Story name and branding, and all stories, photos and videos, belong to The Detroit Story.
