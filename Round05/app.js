//实例化vue对象
new Vue({
	el:"#app-vue",
	data:{
		age:23,
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
			this.age += inc;
		},
		substract:function(dec){
			this.age -= dec;
		},
		getOffsetXY:function(e){
			//mouseEvent
			// console.log(e);
			this.x = e.offsetX;
			this.y = e.offsetY;
		}
	}
})