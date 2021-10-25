import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setNotification } from '../../state/notification.reducer'
import { getSurvey, submitResponse } from '../../state/survey.reducer'
import SurveyForm from '../SurveyForm/SurveyForm'
import './Survey.scss'

const Survey = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { surveys } = useSelector(state => state)

	const fetchSurvey = () => dispatch(getSurvey(id))
	useEffect(() => {
		try {
			// if the survey has not been fetched yet, fetch it
			if (id !== surveys?.survey?.survey?._id) {
				fetchSurvey()
			}

		} catch (error) {
			console.error(error)
			//create a notification
			const failedNotification = {
				hasError: true,
				title: 'Failed!',
				message: `Failed! ${error}`
			}
			//set notification
			dispatch(setNotification(failedNotification))
			// unset notification
			setTimeout(() => {
				dispatch(setNotification({ ...failedNotification, title: '', message: '' }))
			}, 2000)
		}
	}, [surveys?.survey?.survey?._id])

	if (!surveys.survey.questions) {
		return <h2>loading...</h2>
	}

	const handleSubmit = (values) => {

		const response = {
			...values,
			surveyId: surveys?.survey?.survey?._id
		}

		try {
			// send submission
			dispatch(submitResponse(response))
			//create a notification
			const successNotification = {
				hasError: false,
				title: 'Add Survey Success!',
				message: 'Survey added successfuly'
			}
			//set success notification
			dispatch(setNotification(successNotification))
			//unset notification upon success
			setTimeout(() => {
				dispatch(setNotification({ ...successNotification, title: '', message: '' }))
			}, 2000)
			//refresh page
			setTimeout(() => {
				window.location.href = `${window.location.protocol}//${window.location.host}`
			}, 1000)

		} catch (error) {
			//create a notification
			const failedNotification = {
				hasError: true,
				title: 'Add Survey Failed!',
				message: `Adding survey failed! ${error?.response?.data?.error}`
			}
			//set notification
			dispatch(setNotification(failedNotification))
			// //unset notification upon success
			setTimeout(() => {
				dispatch(setNotification({ ...failedNotification, title: '', message: '' }))
			}, 2000)

		}
	}
	return (
		<>
			<section className="container">
				<main className="col-md-12">

					<h2 className={'text-primary text-center my-5 mb-2'}>Survey Details</h2>
					<p className={'text-center'}><span className="badge bg-primary rounded-pill">{surveys.survey.questions.length}</span> questions</p>
					<div className="d-flex justify-content-center">
						<SurveyForm questions={surveys.survey.questions} handleSubmit={handleSubmit} />
					</div>
				</main>
			</section>
		</>
	)
}

export default Survey