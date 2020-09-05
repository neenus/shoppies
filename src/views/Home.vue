<template>
  <div class="home">
    <v-banner
      v-if="nominationsList.length === 5"
      app
      color="black"
      class="text-center white--text"
    >
      Thank you for participating! you have nominated five movies.
    </v-banner>

    <Search />
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="my-n2">
          <Results />
        </v-col>
        <v-col cols="12" md="6" class="my-n2">
          <Nominated />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search";
import Results from "@/components/Results";
import Nominated from "@/components/Nominated";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Search,
    Results,
    Nominated
  },
  computed: mapState(["nominationsList"]),
  data() {
    return {
      mobile: false
    };
  }
};
</script>
