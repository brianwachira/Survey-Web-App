import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Login from './pages/auth/login/login'
import Home from './pages/Home'
import setAuthToken from './utils/set-auth-token'
const App = () => {
	const[ isLoggedIn, setLoggedIn] = useState(false)

	useEffect(() => {
		// check for a token in the local storage
		const user = window.localStorage.getItem('user')

		if(user) {
		// set token in the request headers of every request
			let parsed = JSON.parse(user)
			setAuthToken(parsed.token)

			//set login as true
			setLoggedIn(true)
		}

	},[])
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/auth/login">
					{isLoggedIn ? <Redirect to="/" /> : <Login/>}
				</Route>
				<Route path="/">
					{!isLoggedIn ? <Redirect to="/auth/login"/> : <Home/> }
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
