import { makeAutoObservable, runInAction } from 'mobx'
import { getPosts, Posts } from '../api'

class TodoStore {
	todo: Posts[] = []
	isLoading = false

	constructor() {
		makeAutoObservable(this)
	}

	getPostsActions = async () => {
		try {
			this.isLoading = true
			const res = await getPosts()
			runInAction(() => {
				this.todo = res
				this.isLoading = false
			})
		} catch {
			this.isLoading = false
		}
	}
}
export default new TodoStore()
