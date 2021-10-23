import axios from 'axios'
const baseUrl = '/api/auth'

const setAuthToken = token => {
	if (token) {
		// attach the jwt token in every request
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}

const login = async credentials => {

	const response = await axios.post(baseUrl, credentials)
	return response.data


}

export default { login, setAuthToken }