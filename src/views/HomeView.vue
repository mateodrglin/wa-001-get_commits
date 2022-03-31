<template>
  <v-app>
    <v-main class="blue-grey darken-4">
      <v-container class="py-3 px-6" fluid>
        <v-row class="blue-grey darken-4">
          <v-col cols="12">
            <v-card dark class="grey darken-4">
              <v-subheader class="text-h6">Commits</v-subheader>
              <v-list two-line>
                <!-- mjesto za ubacivanje commita -->
                <template v-for="commit in store.commits">
                  <v-list-item :key="commit.sha">
                    <v-list-item-avatar color="grey darken-1">
                      <v-avatar color="indigo">
                        <v-icon dark> mdi-account-circle </v-icon>
                      </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        ><router-link
                          :to="{
                            name: 'commit-details',
                            params: { sha: commit.sha },
                          }"
                        >
                          {{ commit.message }}</router-link
                        >
                      </v-list-item-title>

                      <v-list-item-subtitle>
                        {{ commit.name }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <!--      <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider> -->
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Service from "../services/index.js";
import store from "@/localStorage";

export default {
  name: "HomeView",
  data() {
    return {
      store,
    };
  },
  async mounted() {
    let numberOfCommits = 10;
    this.transformData(numberOfCommits);
  },
  methods: {
    async transformData(numberOfCommits) {
      let data = await this.getData(numberOfCommits);
      for (let d of data) {
        let temp = {
          sha: d.sha,
          name: d.commit.author.name,
          email: d.commit.author.email,
          message: d.commit.message,
          date: new Date(d.commit.author.date).toDateString(),
        };
        this.store.commits.push(temp);
      }
    },
    async getData(numberOfCommits) {
      let resp = await Service.getGlobal(numberOfCommits);
      return resp;
    },
  },
};
</script>
