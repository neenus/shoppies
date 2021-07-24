<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  data: () => ({
    //
  }),
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "The shoppies is a movie search and nomination single page application built with Vue CLI, Vuex and Vueitfy using the OMDb API (The Open Movie Database)."
      },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shoppies" },
      {
        name: "twitter:description",
        content:
          "The shoppies is a movie search and nomination single page application built with Vue CLI, Vuex and Vueitfy using the OMDb API (The Open Movie Database)."
      },
      {
        vmid: "twitterCardImage",
        name: "twitter:image",
        content: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
      },

      // Facebook OpenGraph
      {
        property: "og:url",
        content: "https://shoppies.neenus.com/"
      },
      { property: "og:title", content: "Shoppies" },
      { property: "og:site_name", content: "Shoppies" },
      { property: "og:type", content: "website" },
      {
        vmid: "ogImage",
        property: "og:image",
        content: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
      },
      {
        property: "og:description",
        content:
          "The shoppies is a movie search and nomination single page application built with Vue CLI, Vuex and Vueitfy using the OMDb API (The Open Movie Database)."
      }
    ]
  },
  components: {
    Navbar
  }
};
</script>
