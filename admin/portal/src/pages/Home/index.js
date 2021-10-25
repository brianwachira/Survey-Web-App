import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import InnerBar from '../../components/InnerBar/innerBar'
import Layout from '../../components/Layout/layout'
import { filterSubmissions, getSubmissionsBySurvey } from '../../state/submission.reducer'
import { getSurvey } from '../../state/survey.reducer'
import { useState, useEffect } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import { Link } from 'react-router-dom'

const Home = () => {

	// get surveys from state
	const state = useSelector(state => state)
	const dispatch = useDispatch()
	const fetchSurvey = async id => {
		// if the survey isn't already in state, fetch then
		if (state?.surveys?.survey?._id !== id) {
			dispatch(getSurvey(id))
			// fetch responses too
			await dispatch(getSubmissionsBySurvey(id))
		}
	}
	const title = state?.surveys?.survey?.survey?.title

	// add search bar implementation
	const [searchValue, setSearchValue] = useState('')
	useEffect(() => {
		dispatch(filterSubmissions(searchValue))
	}, [searchValue])

	console.log(state)
	return (
		<>
			<Layout>
				<div className="container-fluid px-5">
					<h2 className="py-4">Surveys</h2>
					<div className="row">
						<div className="col-12 col-sm-3 col-xl-auto px-sm-2 px-0 bg-light d-flex rounded sticky-top overflow-auto">
							<InnerBar title={'Surveys'} items={state?.surveys?.surveys} fetchItem={fetchSurvey} />
						</div>
						<div className="col d-flex px-sm-4 px-0 flex-column h-sm-100">
							<main className="row mb-3">
								<div className="col">
									<Card title={title ? `Information about ${title} survey` : 'Information about surveys'}>
										{state?.surveys?.survey?.survey?.title ?
											<div className="row">
												<div className="col">
													<h6><span className="badge rounded-pill bg-success fs-6">{state?.submissions?.submissionsBySurvey?.length}</span> Responses</h6>
													{state?.submissions?.submissionsBySurvey?.length > 0 ?
														<>
															<SearchBox onChange={setSearchValue} />
															<div className="table-responsive-md">
																<table className="table align-middle table-success table-striped">
																	<thead>
																		<tr>
																			<th scope="col">#</th>
																			<th scope="col">Name</th>
																			<th scope="col">Phone Number</th>
																			<th scope="col">Email</th>
																		</tr>
																	</thead>
																	<tbody>
																		{state?.submissions?.filteredSubmissions.length > 0 && state?.submissions?.filteredSubmissions?.map((submission, index) =>
																			<tr key={submission?.submission?._id}>
																				<th scope="row">{index + 1}</th>
																				<td><Link to={`/submission/${submission?.submission?._id}`}>{submission?.submission?.firstname} {submission?.submission?.lastname}</Link></td>
																				<td>{submission?.submission?.phone}</td>
																				<td>{submission?.submission?.email}</td>
																			</tr>
																		)}
																		{state?.submissions?.filteredSubmissions.length <= 0 && state?.submissions?.submissionsBySurvey?.map((submission, index) =>
																			<tr key={submission?.submission?._id}>
																				<th scope="row">{index + 1}</th>
																				<td><Link to={`/submission/${submission?.submission?._id}`}>{submission?.submission?.firstname} {submission?.submission?.lastname}</Link></td>
																				<td>{submission?.submission?.phone}</td>
																				<td>{submission?.submission?.email}</td>
																			</tr>
																		)}
																	</tbody>
																</table>
															</div>
														</>
														:
														<p>Nothing here yet :(</p>

													}
												</div>
											</div>
											:
											<p>Click any survey on the left to load a single survey :)</p>
										}
									</Card>
								</div>
							</main>
							<main className="row mb-3">
								<div className="col">
									<Card title="Questions">
										{state?.surveys?.survey?.survey?.title ?
											<div className="col-auto">
												<h6><span className="badge rounded-pill bg-success fs-6">{state?.surveys?.survey?.questions?.length}</span> Questions</h6>
												{state?.surveys?.survey?.questions?.map((question, index) =>
													<details key={question?._id}>
														<summary>{index + 1}. {question?.passage}</summary>
														{question?.options?.map(option =>
															<p className='mb-0' key={option._id}>Option {option?.choice} : {option?.value}</p>
														)}
													</details>
												)}
											</div>
											:
											<p>Click any survey on the left to load questions :)</p>
										}
									</Card>

								</div>
							</main>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Home