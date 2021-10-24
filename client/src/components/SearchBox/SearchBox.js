import React from 'react'
import './SearchBox.scss'


const SearchBox = ({ onChange }) => {

	return (
		<>
			<div className="row g-3 d-flex justify-content-center mt-4">
				<div className="col-auto">
					<label htmlFor="inputSearch" className="visually-hidden">Do SAT Really Matter</label>
					<input type="text" className="form-control text-box" id="inputSearch" placeholder="Do SAT Really Matter" onChange={(event) => onChange(event.target.value)}/>
				</div>
				<div className="col-auto">
					<button type="submit" className="btn btn-primary mb-3">Search By Name</button>
				</div>
			</div>
		</>
	)
}
export default SearchBox