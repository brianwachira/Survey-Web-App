import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileCard from '../ProfileCard/profilecard'
import './navbar.scss'
const NavBar = () => {
	const jsonUser = window.localStorage.getItem('user')
	const user = JSON.parse(jsonUser)
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<NavLink to='/survey/add'  className="navbar-brand">
						<button type="button" className="btn  btn-outline-dark">Add Survey <i className="fa fa-plus" aria-hidden="true"></i></button>
					</NavLink>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="w-100 navbar-nav justify-content-center nav justify-content-lg-end">
							<li className="nav-item pt-2 pe-5">
								<div className="progress">
									<div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<p className="mt-1">24k/24k patients seen</p>
							</li>
							<li className="nav-item d-none d-lg-block">
								<ProfileCard userName={user.username} />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar