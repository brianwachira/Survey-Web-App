import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import NotificationBar from './components/NotificationBar'
import Survey from './components/Survey/Survey'
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
				<Route path='/survey/:id'>
					<Layout>
						<Survey/>
					</Layout>
				</Route>
				<Route path="/">
					<Layout>
						<Home/>
					</Layout>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
