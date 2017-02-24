var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		text: 'Timing bro, '  + new Date() +  ' surprised ?'
	}
})

var app3 = new Vue({
	el: '#app-3',
	data:{
		seen: false,
		seen1: true
	}
})

var app4 = new Vue({
	el:'#app-4',
	data: {
		todos: [
			{
				msg: 'First msg',
			},
			{
				msg: 'Hello world',
			},
			{
				msg: 'Am the last one bruh',
			}
		]
	}
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		txt: 'Reversed  alphabet bruh A B C D E F G H I J K L M N O P Q R S T U V W X Y Z YEAH'
	},
	methods: {
		reverseMessage: function(){
			this.txt = this.txt.split(' ').reverse().join(' ')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello bruh'
	}
})

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data:{
		groceryList: [
		{text: 'Vegetables'},
		{text: 'Tamer'},
		{text: 'Fromage'},
		]
	}
})