<template>
	<div class="label">
		<label :for="name">{{ name }}</label>
		<div class="error">{{ error }}</div>
	</div>
	<input
		:id="name"
		:value="value"
		:type="type"
		@input="input"
	/>
</template>

<script>
export default { 
	emits: ['update'],

  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
    },
    rules: {
      // min: number
      // required: boolean
      type: Object,
      default() {
				return {}
			}
    },
    error: {
      type: String
    }
  },

  created() {
    this.$emit('update', {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value)
    })
  },
  
	methods: {
		input($event) {
				// gather all data from inputs, store in object,
				//  push object to store/localstorage
			this.$emit('update', {
				title: this.name,
				description: this.value,
				importance: this.importance,
				error: this.validate($event.target.value)
			})
		},

		validate(value) {
			if (this.rules.required && value.length === 0) {
				return "Value is required."
			}

			if (this.rules.min && value.length < this.rules.min) {
				return `The min length is ${this.rules.min}.`
			}
		}
	}
}
</script>

<style scoped>

</style>