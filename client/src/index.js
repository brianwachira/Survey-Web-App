import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import bootstrap
import 'bootstrap/dist/js/bootstrap.js'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './state/provider'

ReactDOM.render(
	<GlobalProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</GlobalProvider>,
	document.getElementById('root')
)

