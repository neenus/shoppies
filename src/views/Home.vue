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
                    <v-list-item-title
                      v-html="`${result.Title} (${result.Year})`"
                    >
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
        </v-col>
        <v-col cols="12" md="6" class="my-n2">
          <v-card>
            <!-- nomination list -->
            <v-card-title class="justify-center">{{
              nominationsList.length > 0
                ? "Your nomiations list:"
                : "Your nomiations list is empty"
            }}</v-card-title>
            <v-list>
              <template v-for="(item, index) in nominationsList">
                <v-divider class="my-2" :key="index"></v-divider>
                <v-list-item :key="item.imdbID">
                  <v-img
                    max-width="70"
                    class="mr-3"
                    contain
                    :src="item.Poster"
                  ></v-img>
                  <v-list-item-content>
                    <v-list-item-title v-html="`${item.Title} (${item.Year})`">
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn
                      icon
                      dark
                      right
                      class="d-inline-block indigo darken-4"
                      @click="removeNominee(item)"
                    >
                      <v-icon>delete</v-icon></v-btn
                    >
                  </v-list-item-action>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Search
  },
  computed: mapState(["searchTerm", "nominationsList", "searchResults"]),
  data() {
    return {
      mobile: false
    };
  },
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
