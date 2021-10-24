import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
import notificationReducer from './notification.reducer'
import  surveyReducer  from './survey.reducer'


//combine reducers
const reducer = combineReducers({
	surveys: surveyReducer,
	notification: notificationReducer
})


//create store for separation of concerns
const store = createStore(reducer, applyMiddleware(thunk))

export default store

