<template>

<!-- task list  -->
	<div
		class="tasklist"
	>
		<todo-item />

	</div>
    
</template>

<script>
export default {
	data() {
		return {
			
			todos
		}
	}
    
}
</script>

<style scoped>

</style>

<!-- for todo in todos [retrieved from localStorage]
<todo-item /> with props for all data fields