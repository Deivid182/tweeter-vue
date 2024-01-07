// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
  ],
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESSTOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESHTOKEN_SECRET,
  },
  image: {
    inject: true,
  },
});
