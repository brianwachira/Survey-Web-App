import React from 'react'
import Navbar from './NavBar'

// Default Layout Component
const Layout =({ children }) => {

	return (
		<>
			<Navbar/>
			{children}
		</>
	)
}
export default Layout