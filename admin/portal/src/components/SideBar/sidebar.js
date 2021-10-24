import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './sidebar.scss'
const SideBar = () => {
	const logout = () => {
		window.localStorage.removeItem('user')
		window.location.reload()
	}
	return (
		<>
			<div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
				<NavLink to="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
					<i className="fa fa-bar-chart  fs-1 icon-custom text-center" aria-hidden="true"></i>
				</NavLink>
				<ul className="nav nav-custom nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between justify-content-sm-center w-100 px-2 align-items-center">
					<li className="nav-item">
						<NavLink to="/comingsoon" className="nav-link py-3 px-2" title="Clinics" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
							<i className="fa fa-hospital-o h2 icon-sidebars" aria-hidden="true"></i><br/><small>ANALYTICS</small>
						</NavLink>
					</li>
					<li>
						<NavLink to="/analytics" className="nav-link py-3 px-2" data-bs-toggle="tooltip" data-bs-placement="right" title="Analytics">
							<i className="fa fa-line-chart h2 icon-sidebars" aria-hidden="true"></i>
						</NavLink>
					</li>
					<li>
						<NavLink to="/comingsoon" className="nav-link py-3 px-2" title="Settings" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Settings">
							<i className="fa fa-cogs h2 icon-sidebars" aria-hidden="true"></i>
						</NavLink>
					</li>
					<li>
						<NavLink to="/comingsoon" className="nav-link py-3 px-2" title="Conversations" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Conversations">
							<i className="fa fa-commenting-o h2 icon-sidebars" aria-hidden="true"></i>
						</NavLink>
					</li>
				</ul>
				<div className="dropdown">
					<NavLink to="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fa fa-user h2 icon-sidebars" aria-hidden="true"></i>
					</NavLink>
					<ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
						<li><Link className="dropdown-item" to="#">New project...</Link></li>
						<li><Link className="dropdown-item" to="#">Settings</Link></li>
						<li><Link className="dropdown-item" to="#">Profile</Link></li>
						<li><Link className="dropdown-item" to="#"><div onClick={() => logout()}>Sign out</div></Link></li>
					</ul>
				</div>
			</div>
		</>
	)
}
export default SideBar