import { reactive } from "@vue/reactivity";

const STORAGE_KEY = "todo-vue-storage"

toDoStorage = {
	fetch() {
		const tasks = JSON.parse(
			localStorage.getItem(STORAGE_KEY) || "[]"
		)
		tasks.forEach((task, index) => {
			task.id = index
		})
		toDoStorage.uid = tasks.length
		return tasks
	},
	save(tasks) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
	}
}

class Store {
	constructor() {
		this.state = reactive({
			tasks: toDoStorage.fetch(),
		})
	}
}

export const store = new Store()