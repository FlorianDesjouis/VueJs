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

var data = { a: 1 }
var ex = document.getElementById('ex')
var test = new Vue({
	el: '#ex',
	data: data
})

if (test.$data === data){
	console.log('worked')
	console.log(ex)
	console.log(test.$el)
}

if (test.$el === ex){
	console.log('worked again')
	ex.innerHTML = '15555'
}else{
	console.log('dafack mates')
}

var vm = new Vue({
	data: {
		a: 1
	},
	created: function () {
		console.log('a is: ' + this.a)
	}
})