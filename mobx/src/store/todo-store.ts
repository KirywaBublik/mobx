import { makeAutoObservable } from 'mobx'
import { getPosts, Posts } from '../api'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'

class TodoStore {
	todo?: IPromiseBasedObservable<Posts[]>;

	constructor() {
		makeAutoObservable(this)
	}

	getPostsActions = () => {
        this.todo = fromPromise(getPosts())
    }
}
export default new TodoStore()
