import React from 'react'

const Card = (props) => {

	const { title, children } = props
	return (
		<>
			<div className="card">
				<div className="card-body">
					<h6 className="card-title">{title}</h6>
					{children}
				</div>
			</div>
		</>
	)
}
export default Card