import fs from "node:fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/recruitment/",
    head: {
      title: "新歓特設サイト",
      htmlAttrs: {
        lang: "ja",
      },
      link: [
        {
          rel: "icon",
          href: "https://ibarakikougiken.github.io/recruitment/favicon.png",
        },
      ],
    },
  },
  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: "G-7GQNK14DH6",
        },
      },
    },
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
  },
  site: {
    url: "https://ibarakikougiken.github.io",
    name: "新歓特設サイト",
  },
  nitro: {
    preset: "github_pages",
  },
  hooks: {
    async "prerender:routes"(ctx) {
      const contents = fs.readdirSync("content/contents");
      contents.map((content) => {
        ctx.routes.add(`/contents/${content.replace(".md", "")}`);
      });
    },
  },
  compatibilityDate: "2025-03-05",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxt/scripts",
    "@nuxt/eslint",
  ],
});
