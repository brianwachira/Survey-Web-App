import axios from 'axios'

const setAuthToken = token => {
	if (token) {
		// attach the jwt token in every request
		axios.defaults.headers.common['Authorization'] = `bearer ${token}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}

export default setAuthToken