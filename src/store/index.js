import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: null,
    searchResults: [
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
      }
    ],
    nominationsList: [
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
  },
  mutations: {
    SEARCH(state, payload) {
      state.searchTerm = payload;
    },
    ADD_NOMINEE: (state, movie) => {
      state.nominationsList.unshift(movie);
    },
    REMOVE_NOMINEE(state, index) {
      state.nominationsList.splice(index, 1);
    }
  },
  actions: {
    search(context, payload) {
      context.commit("SEARCH", payload);
    },
    add_nominee(context, payload) {
      // filter the array of nomination list to see if the movie already exists in it
      const filtered = context.state.nominationsList.filter(
        movie => movie.imdbID === payload.imdbID
      );

      // If movie is not already added to nomination list then filtered will be an empty array
      filtered.length > 0
        ? console.log("movie alread in nomination list")
        : context.commit("ADD_NOMINEE", payload);
    },
    remove_nominee(context, movie) {
      const removeIndex = context.state.nominationsList.findIndex(
        element => element.imdbID === movie.imdbID
      );
      if (removeIndex >= 0) {
        context.commit("REMOVE_NOMINEE", removeIndex);
      } else {
        console.log("Error occured..."); // error should not occur :)
      }
    }
  },
  modules: {}
});
