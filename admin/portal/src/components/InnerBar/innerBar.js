import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import './InnerBar.scss'
const InnerBar = (props) => {

	const { title, items, fetchItem, children } = props

	if (!items) {
		return (
			<>loading!!</>
		)
	}
	//console.log(items)
	return (
		<>
			<div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white vh-100">
				<NavLink to="/analytics" className="d-flex align-items-start pb-sm-3 mb-md-0 me-md-auto text-dark text-decoration-none">
					<small>{title}</small>
				</NavLink>
				{!items ?
					<span>loading!!</span> :
					<ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
						{items?.map((item) =>
							<li
								key={item?.survey?._id}
								className="nav-item dropdown btn-group mb-3 w-100">
								<div className="btn-custom w-100">
									<Link className="nav-link" to="#">
										<div className="d-flex justify-content-between">
											{children}
											<button className="btn-style-none" onClick={() => fetchItem(item?.survey?._id)}>
												<p className="mb-0">{item?.survey?.title}</p>
												<p><small>By {item?.survey?.admin?.username}</small></p>
											</button>
											<button type="button" className="btn-style-none dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
												<i className="fa fa-ellipsis-v text-right" aria-hidden="true"></i>
											</button>
											<ul className="dropdown-menu">
												<li><Link className="dropdown-item disabled" to="/comingsoon">View More</Link></li>
												<li><Link className="dropdown-item disabled" to="/comingsoon">Delete Survey</Link></li>
											</ul>
										</div>
									</Link>
								</div>
							</li>
						)}
					</ul>
				}
			</div>
		</>
	)
}

export default InnerBar