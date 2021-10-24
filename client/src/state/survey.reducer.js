import surveyService from '../services/surveys'
const initialState = {
	surveys: [],
	survey: {},
	submitted:[]
}
const surveyReducer = (state =initialState, action) => {
	switch (action.type) {
	case 'INIT_SURVEYS':
		return{
			...state,
			surveys: action.data
		}
	case 'SET_SURVEY':
		return {
			...state,
			survey: action.data
		}
	case 'SUBMIT_RESPONSE':
		return {
			...state,
			submitted: [...state.submitted, action.data]

		}
	default:
		return state
	}
}

export const initializeSurveys = () => {
	return async dispatch => {
		const surveys = await surveyService.getAll()

		dispatch(
			{
				type: 'INIT_SURVEYS',
				data: surveys
			})
	}
}

export const getSurvey = (id) => {
	return async dispatch => {
		const survey = await surveyService.getBy(id)

		dispatch({
			type: 'SET_SURVEY',
			data: survey
		})
	}
}

export const submitResponse = response => {
	return async dispatch => {
		const submittedResponse = await surveyService.submit(response)

		dispatch({
			type: 'SUBMIT_RESPONSE',
			data: submittedResponse
		})
	}
}

export default surveyReducer