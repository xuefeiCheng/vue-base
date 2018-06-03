//初始化 vue对象
//公共组件
Vue.component('greeting',{
	// es6写法 支持换行
	template:`
	<p>
		{{name}}:this is a component
		<button v-on:click='changeMsg'>hello</button>
	</p>`,
	// 有且只有 一个 根容器
	// 闭包
	data:function(){
		return {
			name:'herry'
		}
	},
	methods:{
		changeMsg:function(){
			this.name = 'fei'
		}
	}
})
new Vue({
	el:"#vue-app-one"
})
new Vue({
	el:"#vue-app-two"
})