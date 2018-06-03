//实例化vue对象
new Vue({
	el:'#vue-app'
	,data:{
		name:'xuefeiCheng'
		,job:"web开发"
		,website:"https://github.com/xuefeiCheng"
		,websiteTag:"<a href='https://github.com/xuefeiCheng' target='_blank'>This is a website,too</a>"
	}
})
/*
data-binding:属性绑定对应的值
直接绑定某个标签，使用v-html指令
*/