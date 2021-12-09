import { reactive } from "@vue/reactivity";

const STORAGE_KEY = "todo-vue-storage"

const taskStorage = {
	fetch() {
		const tasks = JSON.parse(
			localStorage.getItem(STORAGE_KEY) || "[]"
		)
		tasks.forEach((task, index) => {
			task.id = index
		})
		taskStorage.uid = tasks.length
		return tasks
	}
}

class Store {
	constructor() {
		this.state = reactive({
			tasks: taskStorage
		})
	}

	save(tasks) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
	} 
}

const store = new Store()

export default { store }