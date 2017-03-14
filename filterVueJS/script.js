new Vue({
	el: '.content',
	data: {
		message: "Hey Pelo"
	},
	filters: {
		uppercase: function (value) {
			if(!value) return ''
				value = value.toString()
			return value.toUpperCase()
		},
		capitalize: function (value) {
			if(!value) return ''
				value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	}
})

