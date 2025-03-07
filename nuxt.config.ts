// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/recruitment/",
    head: {
      title: "新歓特設サイト",
      htmlAttrs: {
        lang: "ja",
      },
      link: [{ rel: "icon", href: "/favicon.png" }],
      meta: [
        // SEO
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "茨城大学,日立キャンパス,水戸キャンパス,工学部,サークル,学生団体,航空技術研究会,新歓,新歓祭ドローン,ラジコン,ロボット,ロボコン,電子工作,プログラミング,教育,社会貢献",
        },
        // OGP
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ibarakikougiken.github.io/recruitment/",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:title",
          property: "og:title",
          content: "航空技術研究会新歓特設サイト",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動する茨城大学公認サークル茨城大学航空技術研究会の新歓特設サイトです。",
        },

        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "航空技術研究会新歓特設サイト",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://ibarakikougiken.github.io/recruitment/og.png",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@ibarakikougiken",
        },
        {
          name: "twitter:creator",
          content: "@ibarakikougiken",
        },
        {
          name: "twitter:title",
          content: "航空技術研究会新歓特設サイト",
        },
        {
          name: "twitter:description",
          content:
            "ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動する茨城大学航空技術研究会の新歓特設サイトです。",
        },
        {
          name: "twitter:image",
          content: "https://ibarakikougiken.github.io/recruitment/og.png",
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
  nitro: {
    preset: "github_pages",
  },
  compatibilityDate: "2025-03-05",
  ssr: true,
  devtools: { enabled: false },
  modules: ["@nuxt/scripts", "@nuxt/eslint"],
});
