<template>
  <div id="search">
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card flat prominent class="mt-5">
          <v-text-field
            outlined
            shaped=""
            clearable=""
            height="50px"
            class="mx-4"
            hide-details
            label="Search"
            append-icon="search"
            @input="search"
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["searchResults", "nominationsList", "searchTerm"]),
  methods: {
    search(payload) {
      this.$store.dispatch("search", payload);
    }
  }
};
</script>
