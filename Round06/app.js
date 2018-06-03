//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		x:0,
		y:0,
		website:'https://github.com/xuefeiCheng'
	},
	methods:{
		getOffsetXY:function(e){
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
		stopPropagation:function(event){
			event.stopPropagation();//js原生 阻止冒泡事件
		},
		alert:function(){
			alert("vue阻止默认事件方式");
		},
		alertJs:function(event){
			event.preventDefault();
			alert("js原生阻止默认事件方式");
		}
	}
})