<template>
  <div id="app">
  <ul>
  <li><router-link to='/'>Home</router-link></li>
  <li><router-link to='/HelloWorld'>Hello</router-link></li>
  </ul>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  return {}
  },
  created:function(){
    fetch("/api/test/testToken.php",{
       method:"post",
       headers:{
         "Content-type":"application/json",
         token:"f4c902c9ae5a2a9d8f84868ad064e706"
       },
       body:JSON.stringify({username:"henry",password:"321321"})
     })
     .then(result => {
       // console.log(result)
       return result.json()
     })
     .then(data => {
       console.log(data)
     })
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
