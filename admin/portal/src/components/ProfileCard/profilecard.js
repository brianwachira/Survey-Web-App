import React from 'react'

const ProfileCard = (props) => {
	const { userName } = props
	return (
		<>
			<div className="d-flex">
				<div className="flex-grow-1 ms-3 me-2 my-auto">
					<h5 className="mb-0"><small>{userName}</small></h5>
				</div>
				<div className="flex-shrink-0 me-3">
					<i className="fa fa-user h2 icon-sidebars" aria-hidden="true"></i>
				</div>
			</div>
		</>
	)
}
export default ProfileCard
