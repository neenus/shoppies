<template>
  <div class="test">
    <h1>This is a test page</h1>
  </div>
</template>

<script>
export default {
  name: "Test",
  metaInfo: {
    meta: [
      // Twitter Card
      {
        vmid: "twitterCardImage",
        name: "twitter:image",
        content:
          "https://pjili-public.s3.ca-central-1.amazonaws.com/auctions/assets/img/welcome_poster.png"
      },
      // Facebook OpenGraph
      {
        vmid: "ogImage",
        property: "og:image",
        content:
          "https://pjili-public.s3.ca-central-1.amazonaws.com/auctions/assets/img/welcome_poster.png"
      }
    ]
  }
};
</script>
