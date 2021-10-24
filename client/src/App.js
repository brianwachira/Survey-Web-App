import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotificationBar from './components/NotificationBar'
import Home from './pages/Home'

const App = () => {
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
