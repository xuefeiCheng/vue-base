<template>
  <header>
    <h1 v-on:click='changeT'>{{msg}}--{{msg1}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:['msg1'],
  data () {
    return {
      msg: 'This is header'
    }
  },
  methods:{
  changeT:function(){
  this.msg1 ='变更传递的值'
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
