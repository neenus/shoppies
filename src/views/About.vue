<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  metaInfo: {
    meta: [
      { name: "title", content: "Shoppies | About" },
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
        name: "twitter:image",
        content: "https://cdn.cdnlogo.com/logos/a/94/about-me.svg"
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
        property: "og:image",
        content: "https://cdn.cdnlogo.com/logos/a/94/about-me.svg"
      },
      {
        property: "og:description",
        content:
          "The shoppies is a movie search and nomination single page application built with Vue CLI, Vuex and Vueitfy using the OMDb API (The Open Movie Database)."
      }
    ]
  }
};
</script>
