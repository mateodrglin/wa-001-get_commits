<template>
  <div class="home">
    
    <CommitDetails/>
  </div>
</template>

<script>
// @ is an alias to /src
import CommitDetails from '../components/CommitDetails.vue'

export default {
  name:'HomeView',
  components: {
    CommitDetails
  }

}
</script>
