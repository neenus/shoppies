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
    }
  },
  actions: {
    search(context, payload) {
      context.commit("SEARCH", payload);
    }
  },
  modules: {}
});
