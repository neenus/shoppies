<template>
  <div class="home">
    <Search />
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="my-n2">
          <v-card>
            <!-- search results -->
            <v-card-title class="justify-center"
              >Results for "{{ searchInput }}":</v-card-title
            >
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
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="my-n2">
          <v-card>
            <!-- search results -->
            <v-card-title class="justify-center">Nomiation list:</v-card-title>
          </v-card>
        </v-col>
      </v-row>
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
  },
  data() {
    return {
      searchInput: "fast",
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
      ]
    };
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
