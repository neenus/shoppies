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
        content:
          "https://careers.pjili.com/wp-content/uploads/2020/03/pjili_careers_v1.png"
      },

      // Facebook OpenGraph
      {
        vmid: "ogImage",
        property: "og:image",
        content:
          "https://careers.pjili.com/wp-content/uploads/2020/03/pjili_careers_v1.png"
      }
    ]
  }
};
</script>
