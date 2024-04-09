import { makeAutoObservable } from 'mobx'

class TodoStore {
	todo = [
		{
			id: 0,
			title: '1',
			complete: false,
		},
		{
			id: 1,
			title: '2',
			complete: false,
		},
		{
			id: 2,
			title: '3',
			complete: false,
		},
	]

	constructor() {
		makeAutoObservable(this)
	}

	addTodo() {
		this.todo.push()
	}

	removeTodo(id: number) {
		this.todo = this.todo.filter(item => item.id !== id)
	}

	completeTodo(id: number) {
		this.todo = this.todo.map(item =>
			item.id === id ? { ...item, complete: !item.complete } : item
		)
	}
}
export default new TodoStore()
