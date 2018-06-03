//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		changeColor:false,
		changeLength:false
	},
	methods:{

	},
	computed:{
		compareClasses:function(){
			return {
				changeLength:this.changeLength,
				changeColor:this.changeColor
			}
		}
	}
})