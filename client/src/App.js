import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotificationBar from './components/NotificationBar'
import Home from './pages/Home'
import { initializeSurveys } from './state/survey.reducer'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		//initialize data
		dispatch(initializeSurveys())
	},[])
	return (
		<BrowserRouter>
			<NotificationBar/>
			<Switch>
				<Route path="/">
					<Home/>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
