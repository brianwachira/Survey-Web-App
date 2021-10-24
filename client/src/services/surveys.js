import axios from 'axios'
const baseUrl = '/api/survey'

const getAll = async () => {
	const newUrl = `${baseUrl}/all`
	const response = await axios.get(newUrl)
	return response.data
}

export default { getAll }