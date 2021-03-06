import axios from 'axios'
const baseUrl = 'https://secret-plateau-48735.herokuapp.com/api/survey'

const getAll = async () => {
	const newUrl = `${baseUrl}/all`
	const response = await axios.get(newUrl)
	return response.data
}
const getBy = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)

	return response.data
}

const submit = async (newResponse) => {
	const submissionsUrl = 'https://secret-plateau-48735.herokuapp.com/api/submissions'
	const response = await axios.post(submissionsUrl,newResponse)

	return response.data
}

export default { getAll, getBy, submit }