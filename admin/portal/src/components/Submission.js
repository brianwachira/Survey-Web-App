import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import Layout from './Layout/layout'
import Card from './Card'
//import { getSubmissionById } from '../state/submission.reducer'
//import { setNotification } from '../state/notification.reducer'

const Submission = () => {

	const { id } = useParams()
	const submissions = useSelector(state => state?.submissions)

	if (!submissions?.submission) {
		return <h2>loading...</h2>
	}
	return (
		<>
			<Layout>
				<div className="container-fluid px-5">
					<h2 className="py-4">Submissions</h2>
					<div className="col d-flex px-sm-4 px-0 flex-column h-sm-100">
						<main className="row mb-3">
							<div className="col">
								<Card title='Response'>
									{submissions?.submissions.map((submission) =>
										<div key={submission?.submission?._id} >
											<h3>{submission?.submission?._id === id && `${submission?.submission?.survey?.title} submission for`}  {submission?.submission?._id === id && submission?.submission?.firstname} {submission?.submission?._id === id && submission?.submission?.lastname}</h3>
											{submission.submission?._id === id && submission?.response[0]?.response?.map((res, index) =>
												<div key={res._id}>
													<p className={'mb-0'}>{index + 1}: {res?.question?.passage}</p>
													{res?.question?.options?.map(option =>
														<p key={option?._id} className={'mb-0'}>{option?.choice}: {option?.value}</p>
													)}
													<p>Selected choice: {res.choice}</p>
												</div>
											)}
										</div>
									)}
								</Card>
							</div>
						</main>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Submission