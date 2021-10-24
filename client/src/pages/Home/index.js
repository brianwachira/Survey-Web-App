import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBox from '../../components/SearchBox/SearchBox'
//import { initializeSurveys } from '../../state/survey.reducer'

const Home = () => {

	// get surveys from state
	const { surveys }=  useSelector(state => state)
	return (
		<>
			<section>
				<main className="container">
					<h2 className={'text-primary text-center mt-4'}>Surveys</h2>
					<SearchBox/>
					<div className="row">
						{surveys.surveys.map(survey =>
							<div className="col-md-6 col-lg-4 mb-2" key={survey.survey._id}>
								<h4>{survey.survey.title}</h4>
								<p>Has {survey.questions.length} questions</p>
								<Link to={`/survey/${survey.survey._id}`}>See more</Link>
							</div>
						)}
					</div>
				</main>
			</section>
		</>
	)
}

export default Home