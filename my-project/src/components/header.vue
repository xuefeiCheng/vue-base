<template>
  <header>
    <h1>{{msg}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: 'This is header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background:lightgreen;
  padding:10px;
}
h1{
  color:#222;
}
</style>
