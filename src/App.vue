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
    logo: require("./assets/logo.png")
  }),
  metaInfo: {
    title: "Shoppies",
    meta: [
      // Twitter Card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Shoppies" },
      {
        name: "twitter:description",
        content:
          "The shoppies is a movie search and nomination single page application built with Vue CLI, Vuex and Vueitfy using the OMDb API (The Open Movie Database)."
      },
      { name: "twitter:image", content: require("./assets/logo.png") },

      // Facebook OpenGraph
      { property: "og:title", content: "Shoppies" },
      { property: "og:site_name", content: "Shoppies" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: require("./assets/logo.png") },
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
