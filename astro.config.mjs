// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: Set your site URL https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
  // TODO: Get this from the site-config
  site: "https://fluffy-conkies-755a67.netlify.app/",
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },
});
