<!-- 说明：初始项目，新创建组件haha -->

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <HAHA/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HAHA from './components/haha'

export default {
  name: 'App',
  components: {
    HelloWorld,HAHA
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
  margin-top: 60px;
}
</style>
