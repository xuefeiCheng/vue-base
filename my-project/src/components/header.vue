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
  //生命周期
  beforeCreate:function(){
  //可加载动画
  alert("组件实例化之前执行的函数");
  },
  created:function(){
  //dom还未建造，可以预先加载数据
  //结束loading
  alert("组件实例化完毕，但是页面还未显示");
  },
  beforeMount:function(){
  //开始编译，挂载之前，创建虚拟dom
  alert("挂载实例之前，页面仍未展示，虚拟dom已经配置，$el");
  },
  mounted:function(){
  //假设数据需要dom创建完成后，在加载，可以在这里请求数据
  alert("组件挂载后，此方法执行后，页面显示");

  },
  beforeUpdate:function(){
  alert("组件更新前，页面仍未更新，虚拟dom配置");
  },
  updated:function(){
  alert("组件更新完毕，页面展示");
  },
  beforeDestroy:function(){
  alert("组件销毁前");
  },
  destroyed:function(){
  alert("组件销毁完毕");
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
