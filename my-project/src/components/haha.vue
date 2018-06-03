<template>
  <div class="haha">
    <h1>{{ msg }}</h1>
    <ul>
    <template>
      <li v-for='user in users' v-on:click='show'><a href='javaScript:;'>{{user}}</a></li>
      </template>
    </ul>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HAHA',
  data () {
    return {
      msg: 'this is haha',
      users:['xue','fei']
    }
  },
  methods:{
    show:function(){
      alert("this man is haha`s users");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
