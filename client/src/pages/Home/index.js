import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBox from '../../components/SearchBox/SearchBox'
//import { initializeSurveys } from '../../state/survey.reducer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { filterSurveys } from '../../state/survey.reducer'

const Home = () => {

	// get surveys from state
	const { surveys } = useSelector(state => state)

	const dispatch = useDispatch()
	// search value to track search text from searchbox component
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		dispatch(filterSurveys(searchValue))
	}, [searchValue])
	return (
		<>
			<section>
				<main className="container">
					<h2 className={'text-primary text-center mt-4'}>Surveys</h2>
					<SearchBox onChange={setSearchValue} />
					<div className="row mt-3">
						{surveys.filteredSurveys.length > 0 && surveys.filteredSurveys.map(survey =>
							<div className="col-md-6 col-lg-4 mb-4" key={survey.survey._id}>
								<div className="card text-center">
									<div className="card-header">
										<h5 className='card-title'>{survey.survey.title}</h5>
									</div>
									<div className="card-body">
										<p><span className="badge bg-primary rounded-pill">{survey.questions.length}</span> questions</p>
										<Link to={`/survey/${survey.survey._id}`}><a className="btn btn-outline-primary">See more</a></Link>
									</div>
									<div className="card-footer text-muted">
										2 days ago
									</div>
								</div>
							</div>
						)}
						{surveys.filteredSurveys.length < 1 && surveys.surveys.map(survey =>
							<div className="col-md-6 col-lg-4 mb-4" key={survey.survey._id}>
								<div className="card text-center">
									<div className="card-header">
										<h5 className='card-title'>{survey.survey.title}</h5>
									</div>
									<div className="card-body">
										<p><span className="badge bg-primary rounded-pill">{survey.questions.length}</span> questions</p>
										<Link to={`/survey/${survey.survey._id}`}><a className="btn btn-outline-primary">See more</a></Link>
									</div>
									<div className="card-footer text-muted">
										2 days ago
									</div>
								</div>
							</div>
						)}
					</div>
				</main>
			</section>
		</>
	)
}

export default Home