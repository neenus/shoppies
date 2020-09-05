<template>
  <div id="search">
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card flat prominent class="mt-5">
          <v-text-field
            autofocus
            solo
            clearable=""
            height="40px"
            class="mx-4"
            hide-details
            label="Search for a movie title ..."
            append-icon="search"
            :loading="loading"
            @input="search"
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      loading: false
    };
  },
  computed: mapState(["searchResults", "nominationsList", "searchTerm"]),
  methods: {
    async search(input) {
      this.$store.dispatch("search", input);
      if (input != null && input.length > 0) {
        this.loading = true;
        const url = `${process.env.VUE_APP_OMDB_API_URL}?apikey=${process.env.VUE_APP_OMDB_API_KEY}&s=${input}&type=movie`;
        const results = await axios
          .get(url)
          .then(res => {
            return res.data;
          })
          .catch(err => console.log(err));

        if (results.Response !== "False") {
          this.$store.dispatch("set_search_results", results.Search);
          this.loading = false;
        }
      } else {
        this.$store.dispatch("set_search_results", null);
        this.loading = false;
      }
    }
  }
};
</script>
