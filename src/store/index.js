import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: null,
    searchResults: [],
    nominationsList: []
  },
  mutations: {
    SEARCH(state, payload) {
      state.searchTerm = payload;
    },
    SET_SERACH_RESULTS(state, results) {
      state.searchResults = results;
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
    set_search_results(context, results) {
      context.commit("SET_SERACH_RESULTS", results);
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
