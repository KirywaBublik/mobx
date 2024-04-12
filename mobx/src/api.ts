import axios from 'axios'
import { Inputs } from './Register'
import { getAuthToken, setAuth } from './sessionStorega.ts'
const BASE_URL = `https://affdf12e9349600c.mokky.dev/`

export interface UserProfile {
	headers: {
		Accept: string
		'Content-Type': string
	}
	name: string
	email: string
	id: number
}

const token = getAuthToken()

export const submitForm = async (data: Inputs, endPoint?: string) => {
	try {
		const userData = await axios.post(`${BASE_URL}${endPoint}`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			...data,
		})
		setAuth(userData.data.token)
	} catch (error) {
		console.error('Error posting:')
	}
}

export const fetchUserProfile = async (endPoint?: string) => {
	if (token) {
		try {
			return await axios.get<UserProfile>(`${BASE_URL}${endPoint}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		} catch (error) {
			console.error('Error posting:')
		}
	}
}
