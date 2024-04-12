import { makeAutoObservable } from 'mobx'
import { fetchUserProfile, submitForm } from '../api/api'
import { Inputs } from '../components/Register'
import { clearAuth } from '../utils/session/sessionStorega'

export default class UserStore {
	user = ''

	isAuth = false

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(bool: boolean) {
		this.isAuth = bool
	}

	setUser(user: string) {
		this.user = user
	}

	async login(data: Inputs, endPoint?: string) {
		try {
			await submitForm(data, endPoint)
			this.setAuth(true)
			this.setUser(data.name)
		} catch (e) {
			console.log(e)
		}
	}

	async register(data: Inputs, endPoint?: string) {
		try {
			await submitForm(data, endPoint)
			this.setAuth(true)
			this.setUser(data.name)
		} catch (e) {
			console.log(e)
		}
	}

	logOut() {
		clearAuth()
		this.setAuth(false)
		this.setUser('')
	}

	async getUserInfo(endPoint: string) {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const response: any = await fetchUserProfile(endPoint)
			const data = response.data
			this.setAuth(true)
			this.setUser(data.name)
		} catch (e) {
			console.log(e)
		}
	}
}
