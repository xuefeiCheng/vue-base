<template>
  <footer>
    <p>{{msg}}--{{title}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props:['title'],
  data () {
    return {
      msg: 'this is footer'
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  background:#222;
  padding:6px;
}
p{
  color:lightgreen;
}
</style>
