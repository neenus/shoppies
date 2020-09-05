<template>
  <div id="search-results">
    <v-card>
      <!-- search results -->
      <v-card-title
        class="justify-center"
        v-html="
          searchTerm !== null && searchTerm.length > 0
            ? `Results for '${searchTerm}':`
            : 'Start by typing a movie title'
        "
      ></v-card-title>
      <v-list>
        <template v-for="(result, index) in searchResults">
          <v-divider class="my-2" :key="index"></v-divider>
          <v-list-item :key="result.imdbID">
            <v-img
              max-width="70"
              class="mr-3"
              contain
              :src="result.Poster"
            ></v-img>
            <v-list-item-content>
              <v-list-item-title v-html="`${result.Title} (${result.Year})`">
              </v-list-item-title>
              <v-btn
                v-if="mobile"
                rounded
                right
                class="d-inline-block indigo darken-4 mt-5 white--text"
                @click="nominate(result)"
                :disabled="
                  nominationsList.length < 5
                    ? nominationsList.some(
                        item => item.imdbID === result.imdbID
                      )
                    : true
                "
                >Nominate</v-btn
              >
            </v-list-item-content>
            <v-list-item-action v-if="!mobile">
              <v-btn
                rounded
                right
                class="d-inline-block indigo darken-4 mt-5 white--text"
                @click="nominate(result)"
                :disabled="
                  nominationsList.length < 5
                    ? nominationsList.some(
                        item => item.imdbID === result.imdbID
                      )
                    : true
                "
                >Nominate</v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["searchTerm", "nominationsList", "searchResults"]),
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    nominate(movie) {
      this.$store.dispatch("add_nominee", movie);
    },
    removeNominee(movie) {
      this.$store.dispatch("remove_nominee", movie);
    },
    onResize() {
      this.mobile = window.innerWidth < 600;
    }
  },
  beforeDestroy() {
    if (typeof window !== undefined) {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  }
};
</script>

<style lang="scss">
.smAndDown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background: black;
  }
}
</style>
