import axios from 'axios'
const baseUrl = '/api/survey'

const getAll = async () => {
	const protectedUrl = `${baseUrl}/protected/all`
	const response = await axios.get(protectedUrl)
	return response.data
}
const getBy = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)

	return response.data
}
const create = async (newSurvey) => {
	const response = await axios.post(baseUrl,newSurvey)

	return response.data
}

export default { getAll, getBy, create }