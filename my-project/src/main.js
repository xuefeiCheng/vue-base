import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
axios.defaults.headers.post['Content-type'] = 'application/json'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(VueResource)
//配置路由
const router = new VueRouter({
	routes:[
		{
			path:"/",
			component:Home
		},
		{
			path:"/helloworld",
			component:HelloWorld
		}
	],
	//#/去掉
	mode:"history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
