<template>
  <div id="app">
    <app-header/>
    <!-- 父组件向子组件传值-->
    <users v-bind:users1="users"></users>
    <app-footer/>
  </div>
</template>

<script>
import users from './components/users'
import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'App',
  data(){
  return {
  users:[
{name:"xuefeicheng",position:"web",show:false},
{name:"xuefeicheng",position:"web",show:false},
{name:"xuefeicheng",position:"web",show:false},
{name:"xuefeicheng",position:"web",show:false},
{name:"xuefeicheng",position:"web",show:false}
      ]
  }
  },
  components: {
  'users':users,
    'app-header':Header,
    'app-footer':Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0;
  margin:0;
 // margin-top: 60px;
}
ul,li{list-style:none;}
</style>
