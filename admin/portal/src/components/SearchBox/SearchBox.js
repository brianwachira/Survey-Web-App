import React from 'react'
import './SearchBox.scss'


const SearchBox = ({ onChange }) => {

	return (
		<>
			<div className="row g-3 d-flex justify-content-center">
				<div className="col-auto w-50">
					<label htmlFor="inputSearch" className="visually-hidden">John Doe</label>
					<input type="text" className="form-control" id="inputSearch" placeholder="John Doe" onChange={(event) => onChange(event.target.value)}/>
				</div>
				<div className="col-auto">
					<button type="submit" className="btn btn-outline-dark mb-3">Search By Name</button>
				</div>
			</div>
		</>
	)
}
export default SearchBox