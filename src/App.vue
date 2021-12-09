<template>
  <router-view />

  <div class="row row-content mb-5">
		<div class="col-12">

			<h4>New Task</h4>

			<div class="label">
				<label :for="name">{{ name }}</label>
				<div class="error">{{ error }}</div>
			</div>

			<form @submit.prevent="onSubmit">
				<input type="hidden" name="protocol" value="post" />

				<div class="row-content justify-content-center mb-3">

					<todo-input 
            name="Title"
            :rules="{ required: true, min: 5 }"
            :value="title.value"
            :error="title.error"
            @update="update" 
          />

					<div class='row row-content' style="display: inline-block;">
						<div class='col-sm-2'>
								<!-- {{ form.importance.label() }} -->
						</div>

						<div class='col-sm-1'></div>

						<div class='btn-group btn-group-toggle col-sm-9' data-toggle='buttons'>
							<label class='btn btn-danger'>
								<todo-input 
                  type='radio' 
                  name='importance' 
                  value='danger'
                >Urgent</todo-input>
							</label>
 
							<label class='btn btn-warning'>
								<todo-input 
                  type='radio' 
                  name='importance' 
                  value='warning'
                >Soon</todo-input>
							</label>

							<label class='btn btn-secondary'>
								<todo-input 
                  type='radio' 
                  name='importance' 
                  value='secondary'
                >Whenever</todo-input>
							</label>
						</div>
					</div>
				</div>

				<div class="row row-content justify-content-center">
          <my-button
            background="darkslateblue"
            color="white"
            :disabled="!valid"
          />
				</div>

			</form>
		</div>
	</div>


</template>

<script>
import TodoInput from './components/TodoInput.vue'
import MyButton from '@/components/MyButton.vue'

export default {
  components: { 
    TodoInput, 
    MyButton 
  },

  data () {
    return {
      username: {
        value: 'user',
        error: ''
      },
      password: {
        value: 'pass',
        error: ''
      }
    }
  },

  computed: {
    valid() {
      return (
        !this.title.error
      )
    }
  },

  methods: {
    submit() {
      console.log('Event')
    },

    update({ name, value, error }) {
      this[name].value = value
      this[name].error = error
    },

    authenticated() {
      return
    }
  }
  
}
</script>

<style>

</style>
