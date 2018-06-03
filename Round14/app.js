//初始化多个 vue实例
var one = new Vue({
	el:"#vue-app-one",
	data:{
		title:"vue-app-one"
	},
	computed:{
		greet:function(){
			return 'hello,one';
		}
	}
})

new Vue({
	el:"#vue-app-two",
	data:{
		title:"vue-app-two"
	},
	computed:{
		greet:function(){
			return 'hello,one';
		}
	},
	methods:{
		changeT:function(){
			one.title = 'changed title';
		}
	}
})