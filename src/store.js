import { reactive } from "@vue/reactivity";

const STORAGE_KEY = "todo-vue-storage"

toDoStorage = {
	fetch() {
		const tasks = JSON.parse(
			localStorage.getItem(STORAGE_KEY) || "[]"
		)
		todos.forEach((todo, index) => {
			todo.id = index
		})
		toDoStorage.uid = todos.length
		return todos
	},
	save(todos) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
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