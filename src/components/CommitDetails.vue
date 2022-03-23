<template>
  <div class="details">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'CommitDetails',
  props: {
    msg:"string"
  }
}
</script>