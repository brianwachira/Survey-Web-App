import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import NotificationBar from './components/NotificationBar'
import Login from './pages/auth/login/login'
import Home from './pages/Home'
import AddSurvey from './pages/Surveys/addSurvey'
import { initializeSubmissions } from './state/submission.reducer'
import { initializeSurveys } from './state/survey.reducer'
import setAuthToken from './utils/set-auth-token'
const App = () => {
	const[ isLoggedIn, setLoggedIn] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
		// check for a token in the local storage
		const user = window.localStorage.getItem('user')

		if(user) {
		// set token in the request headers of every request
			let parsed = JSON.parse(user)
			setAuthToken(parsed.token)

			//set login as true
			setLoggedIn(true)

			//initialize data
			dispatch(initializeSurveys())
			dispatch(initializeSubmissions())
		}

	},[])
	return(
		<BrowserRouter>
			<NotificationBar/>
			<Switch>
				<Route path="/auth/login">
					{isLoggedIn ? <Redirect to="/" /> : <Login/>}
				</Route>
				<Route path="/survey/add">
					{!isLoggedIn ? <Redirect to="/" /> : <AddSurvey/>}
				</Route>
				<Route path="/">
					{!isLoggedIn ? <Redirect to="/auth/login"/> : <Home/> }
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
