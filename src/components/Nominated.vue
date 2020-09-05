<template>
  <div id="nominated">
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["nominationsList"]),
  methods: {
    removeNominee(movie) {
      this.$store.dispatch("remove_nominee", movie);
    }
  }
};
</script>
