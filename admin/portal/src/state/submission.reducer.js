import submissionsService from '../services/submissions'
const initialSubmission = {}
const initialState = {
	submission:initialSubmission,
	submissionsBySurvey:[],
	submissions:[],
	filteredSubmissions:[],
}
const submissionsReducer = ( state = initialState, action ) => {
	switch(action.type) {
	case 'INIT_SUBMISSIONS':
		return {
			...state,
			submissions: action.data
		}
	case 'SET_SUBMISSIONS_BY_ID':
		return {
			...state,
			submissionsBySurvey: action.data
		}
	case 'FILTER_SUBMISSIONS':
		return {
			...state,
			filteredSubmissions: state.submissionsBySurvey.filter(submission => submission.submission.firstname.toLowerCase().includes(action.data.toLowerCase()) ||  submission.submission.lastname.toLowerCase().includes(action.data.toLowerCase()))
		}
	case 'SET_SUBMISSION':
		return {
			...state,
			submission: action.data
		}
	default:
		return state
	}
}

export const initializeSubmissions = () => {
	return async dispatch => {
		const submissions = await submissionsService.getAll()
		dispatch({
			type : 'INIT_SUBMISSIONS',
			data: submissions
		})
	}
}

export const getSubmissionsBySurvey = (id) => {
	return async dispatch => {
		const submissions = await submissionsService.getBySurvey(id)
		dispatch({
			type:'SET_SUBMISSIONS_BY_ID',
			data: submissions
		})
	}
}

export const getSubmissionById = (id) => {
	return async dispatch => {
		const submission = await submissionsService.getBy(id)
		dispatch({
			type: 'SET_SUBMISSION',
			data: submission
		})
	}
}

export const filterSubmissions = ( name ) => {
	return dispatch => {
		dispatch({
			type: 'FILTER_SUBMISSIONS',
			data: name
		})
	}
}

export default submissionsReducer