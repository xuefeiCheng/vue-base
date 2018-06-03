<template>
<div class='usersBak'>
<p>测试，传递的是数组/对象（引用）</p>
<hr>
<ul>
<li v-for='user in users' v-on:click='user.show = !user.show'>
<h2>{{user.name}}</h2>
<p v-show='user.show'>{{user.position}}</p></li>
</ul>
</div>
</template>

<script>

//传值 与 传引用
//引用:对其中的一个数组或者对象操作，其他也会受影响，更改的是原始


export default {
  name: 'users',
  //子组件 接收值 使用props 要注意：父组件传递名称与子组件使用名称对应 users
  //props:["users"],
  props:{
    users:{
      type:Array,
      required:true
      }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  width:100%;
  max-width:1200px;
  margin:40px auto;
  padding:0 20px;
  box-sizing:border-box;
}
ul{
  display:flex;
  flex-wrap:wrap;
  list-style-type:none;
  padding:0;
}
li{
  flex-grow:1;
  flex-basis:200px;
  padding:30px;
  border:1px solid #222;
  margin:10px;
}
</style>
