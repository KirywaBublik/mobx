export const setAuth = (token: string) => {
	sessionStorage.setItem('authToken', token)
}

export const clearAuth = () => {
	sessionStorage.removeItem('authToken')
}

export const getAuthToken = () => {
	return sessionStorage.getItem('authToken')
}
