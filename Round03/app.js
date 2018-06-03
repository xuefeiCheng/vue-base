// 实例化vue对象
new Vue({
	el:"#vue-app"//element
	,data:{
		//key:value
		name:'xuefeiCheng',
		job:"web前端开发"

	}
	,methods:{
		getName:function(){
			return this.name;
		}
		,getJob:function(){
			return this.job;
		}
		,greet:function(msg){
			return 'Good '+msg+' ! I am '+this.getName();
		}
		,greet_v:function(msg){
			return 'Good '+msg+' ! I am '+this.name;
		}
	}
})
/*
el:element 根容器
data：用于存储数据
是一个对象，在组件中是一个函数，采用的是闭包的思想
methods:方法集合，实现业务逻辑，存储方法
*/