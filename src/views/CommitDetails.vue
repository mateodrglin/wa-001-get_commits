<template>
  <v-app class="blue-grey darken-4">
    <v-container class="blue-grey darken-4">
      <v-card dark class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-avatar tile>
            <v-avatar color="indigo">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              {{ commitDetails.message }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ commitDetails.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn disabled outlined rounded text>
            {{ commitDetails.email }}
          </v-btn>
          <v-btn disabled outlined text> {{ commitDetails.date }} </v-btn>
          <v-btn @click="goBack()" dark color="red">back to commit list</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import store from "@/localStorage";

export default {
  name: "CommitDetails",
  props: {
    sha: String,
  },
  data() {
    return {
      store,
      commitDetails: {},
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    };
  },
  mounted() {
    let value = this.sha;
    let chosenCommit = this.store.commits.findIndex((x) => x.sha === value);
    this.commitDetails = store.commits[chosenCommit];
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
