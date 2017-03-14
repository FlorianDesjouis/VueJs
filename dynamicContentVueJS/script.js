Vue.component('create-post', {
	template: '#create-template'
})

Vue.component('manage-posts', {
	template: '#manage-template',
	data: function(){
		return {
			posts: [
			'Vue.js: The Basics',
			'Tuto number 2',
			'Tuto number 3'
			]
		}
	}
})

new Vue({
	el: '#content',
	data: {
		currentView: 'create-post'
	}
})