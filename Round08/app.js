// 实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		name:"",
		age:""
	},
	methods:{
		logName:function(){
			//console.log(this.$refs);
			this.name = this.$refs.input_name.value;
		},
		logAge:function(){
			this.age = this.$refs.input_age.value;
		}
	}
})