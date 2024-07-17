// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  // components: {
  //   dirs: [
  //     {
  //       path: "~/app/components",
  //       pathPrefix: false,
  //     },
  //   ],
  // },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],

  // build: {
  //   transpile: ["vue-sonner"],
  // },
});
