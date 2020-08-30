<template>
  <div class="home">
    <v-container>
      <Search />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search";

export default {
  name: "Home",
  components: {
    Search
  }
};
</script>
