<template>

<!-- task list  -->
	<!-- <div
		class="tasklist"
		v-for="task in tasks" 
		:key="task.id"
	>
		<todo-item :task="task"/>

	</div> -->
    
	<div class="taskinput">
		<todo-input />
	</div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue'
// import TodoItem from '@/components/TodoItem.vue'
import store from '../store.js'
console.log(store)

export default {
	components: { TodoInput },
	// data() {
	// 	return {

	// 		tasks: store.tasks
	// 	}
	// },
	// methods: {
	// 	addTask() {
	// 		var value = this.newTask && this.newTask.trim()
	// 		if (!value) {
	// 			return
	// 		} else {
	// 			this.task.push({
	// 				id: store.taskStorage.uid++,
	// 				title: value,
	// 				completed: false
	// 			})
	// 			this.newTask = ""
	// 		}
	// 	}
	// },
	// directives: {
	// 	focus: {
	// 		insterted: function (obj) {
	// 			obj.focus()
	// 		}
	// 	}
	// }
  // mounted() {  
	// 	var task = {id: 1, title: "title", description: "desc"}
	// 	store.task.save(task)
	// }
}
</script>

<style scoped>

</style>

<!-- for todo in todos [retrieved from localStorage]
<todo-item /> with props for all data fields -->