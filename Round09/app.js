//实例化 vue对象
new Vue({
	el:"#vue-app",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		AddtoA:function(){
			console.log("methods add to a");
			return this.a + this.age;
		},
		AddtoB:function(){
			console.log("methods add to b");
			return this.b + this.age;
		}
	},
	computed:{
		AddtoAA:function(){
			console.log("computed add to a");
			return this.a + this.age;
		},
		AddtoBB:function(){
			console.log("computed add to b");
			return this.b + this.age;
		}
	}
})