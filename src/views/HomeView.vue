<template>
  <div class="home">
    <ol>
      <li v-for="commit in commits" :key="commit.sha">
        <!-- <router-link :to="'/commit_details/' + commit.sha">{{ commit.sha }}</router-link> -->
        <router-link :to="{name:'commit_details', params: { sha: commit.sha}}">{{ commit.sha }}</router-link>
      </li>
    </ol>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'HomeView',
  data() {
    return {
      commits: []
    }
  },

  mounted: async function() {
     let get_request = await fetch("https://api.github.com/repos/vuejs/vue/commits")
     let response = await get_request.json() //lokalna varijabla; vidljiva samo u mounted fun
     this.commits = response //this se referencira na objekta kojeg sam eksportirao (export default ili data?)
  }

}
</script>
