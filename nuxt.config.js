/*
 * @Author: 左太宇
 * @Date: 2020-07-27 14:22:09
 * @LastEditTime: 2020-11-30 18:47:51
 * @LastEditors: 左太宇
 * @message:
 */
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "叮咚导航",
    bodyAttrs: {
      class: 'theme-white'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-mobile-web-app-title", content: "叮咚导航" },
      { name: "apple-mobile-web-app-status-bar-style", content: "white" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        vmid: "description",
        name: "description",
        content:
          "叮咚导航是汇集全网优质网址及资源的中文上网导航。及时收录影视、音乐、小说、游戏等分类的网址和内容，让您的网络生活更简单精彩。上网，从叮咚导航开始。"
      },
      {
        vmid: "keywords",
        name: "keywords",
        content:
          "叮咚导航,导航网站，叮咚，今日热门，热搜，火爆，前端，网址，文章，咨询，热门，上网导航,网址大全,网址导航,上网导航,网址,导航,网址大全,活动,抽奖活动"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", href: "/nuxt-icon.png" },
      { rel: "shortcut icon", href: "/nuxt-icon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/nuxt-icon.png" },
      { rel: "apple-touch-startup-image", href: "/nuxt-icon.png" }
    ]
  },
  /*
   ** Global CSS
   */
  css: [{ src: "element-ui/lib/theme-chalk/index.css" }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/element-ui", ssr: true },
    // { src: "~/plugins/less", ssr: true },
    { src: "~plugins/baidu.js", ssr: false }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    less: "~/assets/less/base.less"
    //   // sass: ... 需要什么配置什么，这里是全局的
  },
  less: {
    lessOptions: {
      modifyVars: { "@primary-color": "#1DA57A" },
      javascriptEnabled: true
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/]
    // loaders: {
    //   lessLoaderOptions: {
    //     lessOptions: {
    //       modifyVars: { "@primary-color": "#1DA57A" },
    //       javascriptEnabled: true
    //     }
    //   }
    // }
  }
};
