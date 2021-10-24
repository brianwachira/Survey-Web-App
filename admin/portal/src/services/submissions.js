import axios from 'axios'
const baseUrl = '/api/submissions'

const getAll = async () => {
	const protectedUrl = `${baseUrl}/all`
	const response = await axios.get(protectedUrl)
	return response.data
}
const getBy = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)

	return response.data
}

const getBySurvey = async (id) => {
	const response = await axios.get(`${baseUrl}/survey/${id}`)

	return response.data
}

export default { getAll, getBy, getBySurvey }