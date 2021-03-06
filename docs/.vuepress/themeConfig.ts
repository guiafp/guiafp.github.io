import { defineThemeConfig } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://guiafp.com.br",

  author: {
    name: "Guia de Finanças Pessoais",
    url: "https://guiafp.com.br",
  },

  iconPrefix: "iconfont icon-",
  
  logo: "/logo.svg",

  repo: "guiafp/guiafp.github.io",

  docsDir: "/docs",

  pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime"],
  
  themeColor: {
    purple: "#8E44AD",
    red: "#f26d6d",
    orange: "#fb9b5f",
    green: "#3eaf7c",
  },

  // blog: {
  //   medias: {
  //     Discord: "https://example.com",
  //     Email: "https://example.com",
  //     GitHub: "https://example.com",
  //     Facebook: "https://example.com",
  //     Instagram: "https://example.com",
  //     Linkedin: "https://example.com",
  //     Twitter: "https://example.com",
  //     Youtube: "https://example.com",
  //     // Whatsapp: "https://example.com",
  //     // Reddit: "https://example.com",
  //     // Rss: "https://example.com",
  //     // Steam: "https://example.com",
  //     // Wechat: "https://example.com",
  //     // Weibo: "https://example.com",
  //     // Lines: "https://example.com",
  //     // Baidu: "https://example.com",
  //     // Bitbucket: "https://example.com",
  //     // Dingding: "https://example.com",
  //     // Dribbble: "https://example.com",
  //     // Evernote: "https://example.com",
  //     // Flipboard: "https://example.com",
  //     // Gitee: "https://example.com",
  //     // Gitlab: "https://example.com",
  //     // Gmail: "https://example.com",
  //     // Pinterest: "https://example.com",
  //     // Pocket: "https://example.com",
  //     // QQ: "https://example.com",
  //     // Qzone: "https://example.com",
  //     // Zhihu: "https://example.com",
  //   },
  // },

  locales: {
    "/": {
      // navbar
      navbar: navbar.pt,

      // sidebar
      sidebar: sidebar.pt,

      // footer: "Default footer",

      // displayFooter: true,

      // blog: {
      //   description: "Guia de Finanças Pessoais",
      //   intro: "/intro.html",
      // },
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: navbar.zh,

    //   // sidebar
    //   sidebar: sidebar.zh,

    //   footer: "默认页脚",

    //   displayFooter: true,

    //   blog: {
    //     description: "一个前端开发者",
    //     intro: "/zh/intro.html",
    //   },
    // },

  },

  encrypt: {
    config: {
      "/guia/encrypt.html": ["1234"],
      // "/zh/guia/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // blog: {
    //   autoExcerpt: true,
    // },

    seo:{
      hostname:"https://guiafp.com.br/",
      fallBackImage:"https://guiafp.com.br/logo.png",
      siteFavicon:"https://guiafp.com.br/logo.png"
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "guiafp/guiafp.github.io",
      repoId: "R_kgDOHQNZ_w",
      category: "General",
      categoryId: "DIC_kwDOHQNZ_84CO2mq",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    },
  },
});
