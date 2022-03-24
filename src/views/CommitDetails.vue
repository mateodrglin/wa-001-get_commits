<template>
  <div class="commit">
    <h1>Detalji Commita</h1>
    <ul>
      <li>Ime autora: {{commit.commit.author.name}}</li>
      <li>Email adresa: {{commit.commit.author.email}}</li>
      <li>Poruka commita: {{commit.commit.message}}</li>
      <li>Datum: {{commit.commit.author.date}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommitDetails',
  props: {
    sha: String
  },

  data(){
    return{
      commit:[]
    }
  },
  
  created: async function() {
    
    let get_request = await fetch("https://api.github.com/repos/vuejs/vue/commits/" + this.sha)
    let response = await get_request.json() 
    this.commit = response
    console.log(get_request)
  }

}
</script>