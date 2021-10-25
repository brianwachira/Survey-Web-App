import React from 'react'
import { useDispatch } from 'react-redux'
import Card from '../../components/Card'
import CreateSurveyForm from '../../components/CreateSurveyForm'
import Layout from '../../components/Layout/layout'
import { setNotification } from '../../state/notification.reducer'
import { addSurvey } from '../../state/survey.reducer'

const AddSurvey = () => {

	const dispatch = useDispatch()
	const handleSubmit = (values) => {
		//console.log(values)

		const questions = values.questions.map(question => {
			return {
				passage: question.question,
				options: [
					{
						choice: 'A',
						value: question.optionA
					},
					{
						choice: 'B',
						value: question.optionB
					}
				]
			}
		})
		const jsonUser = window.localStorage.getItem('user')
		const user = JSON.parse(jsonUser)
		const newSurvey = {
			admin: user.id,
			title: values.title,
			questions
		}
		try {
			dispatch(addSurvey(newSurvey))
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
			<Layout>
				<div className="container-fluid px-5">
					<div className="row">
						<div className="col d-flex px-sm-4 px-0 flex-column h-sm-100">
							<main className="row mb-3">
								<div className="col">
									<div style={{ maxWidth: '900px', margin: '0 auto' }}>
										<h2 className="py-4 text-center">Add Survey</h2>
										<Card title="Add Survey Form">
											<CreateSurveyForm handleSubmit={handleSubmit} />
										</Card>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}
export default AddSurvey