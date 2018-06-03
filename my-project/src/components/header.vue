<template>
  <header>
    <h1 v-on:click='changeT'>{{msg}}--{{msg1}}</h1>
    <h2 v-on:click='pushToP'>向父组件传值，事件传值</h2>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:['msg1'],
  data () {
    return {
      msg: 'This is header',
      Top:"给父组件传递的值"
    }
  },
  methods:{
  changeT:function(){
  this.msg1 ='变更传递的值'
  },
  pushToP:function(){
    this.$emit('parent',this.Top);
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
