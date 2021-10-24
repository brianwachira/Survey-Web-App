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


export default submissionsReducer