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
      // Twitter Card
      {
        vmid: "twitterCardImage",
        name: "twitter:image",
        content: "https://cdn.cdnlogo.com/logos/a/94/about-me.svg"
      },

      // Facebook OpenGraph
      {
        vmid: "ogImage",
        property: "og:image",
        content: "https://cdn.cdnlogo.com/logos/a/94/about-me.svg"
      }
    ]
  }
};
</script>
