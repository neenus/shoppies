<template>
  <div class="home">
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
                  : 'Start by typing in the search box above'
              "
            ></v-card-title>
            <v-list>
              <template v-for="(result, index) in results">
                <v-divider class="my-2" :key="index"></v-divider>
                <v-list-item :key="result.Title">
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
                      dark
                      right
                      class="d-inline-block indigo darken-4 mt-5"
                      >Nominate</v-btn
                    >
                  </v-list-item-content>
                  <v-list-item-action v-if="!mobile">
                    <v-btn
                      rounded
                      dark
                      right
                      class="d-inline-block indigo darken-4 mt-5"
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
            <v-card-title class="justify-center">Nomiations:</v-card-title>
            <v-list>
              <template v-for="(item, index) in nominatedList">
                <v-divider class="my-2" :key="index"></v-divider>
                <v-list-item :key="item.Title">
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
  computed: mapState(["searchTerm"]),
  data() {
    return {
      mobile: false,
      results: [
        {
          Title: "Fast & Furious 6",
          Year: "2013",
          imdbID: "tt1905041",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
        },
        {
          Title: "Fast Five",
          Year: "2011",
          imdbID: "tt1596343",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
        },
        {
          Title: "The Fast and the Furious",
          Year: "2001",
          imdbID: "tt0232500",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
          Title: "Fast & Furious",
          Year: "2009",
          imdbID: "tt1013752",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
          Title: "2 Fast 2 Furious",
          Year: "2003",
          imdbID: "tt0322259",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          Title: "The Fast and the Furious: Tokyo Drift",
          Year: "2006",
          imdbID: "tt0463985",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
        },
        {
          Title: "Fast & Furious Presents: Hobbs & Shaw",
          Year: "2019",
          imdbID: "tt6806448",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
          Title: "Fast Times at Ridgemont High",
          Year: "1982",
          imdbID: "tt0083929",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
        },
        {
          Title: "Fast Food Nation",
          Year: "2006",
          imdbID: "tt0460792",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYzM0ODQ5OGItZDZhMy00NDk0LWJmNTgtZGRiMTBjMDI1YTAwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
          Title: "How to Sell Drugs Online (Fast)",
          Year: "2019",
          imdbID: "tt9184994",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZjIzNTkyNjktNDdmMy00MmI4LWFlN2MtNDllYTVhZjljNWFiXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg"
        }
      ],
      nominatedList: [
        {
          Title: "Fast & Furious Presents: Hobbs & Shaw",
          Year: "2019",
          imdbID: "tt6806448",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
          Title: "Fast & Furious 6",
          Year: "2013",
          imdbID: "tt1905041",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
        }
      ]
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
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
