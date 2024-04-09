import { makeAutoObservable } from "mobx";

class Counter {
	count = 0

	constructor() {
		makeAutoObservable(this)
	}

	addCount() {
		this.count += 1
	}

	removeCount() {
		this.count -= 1
	}

	get reset() {
		return this.count * 2
	}
}
export default Counter;