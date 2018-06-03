import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
Vue.config.productionTip = false
Vue.use(VueRouter)
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
