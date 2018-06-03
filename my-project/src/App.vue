<template>
  <div id="app">
    <app-header/>
    <users/>
    <app-footer/>
  </div>
</template>

<script>
import users from './components/users'
import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'App',
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
