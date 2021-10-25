/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const SurveyForm = ({ questions, handleSubmit }) => {
	//,

	const initialValues = {
		response: questions.map((question) => {
			return {
				'question': question._id,
				'choice': ''
			}
		}),
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	}

	// set up a validation schema
	const validationSchema = Yup.object().shape({
		initialValues: Yup.array()
			.of(Yup.object().shape({
				choice: Yup.boolean().required().oneOf(['A', 'B'], 'Selecting a choice is required')
			})),
		firstName: Yup.string().min(2, 'Too Short').required('Your first name is required'),
		lastName: Yup.string().min(2, 'Too Short').required('Your last name is required'),
		phone: Yup.string().required('Phone is required'),
		email: Yup.string().required('Email is required'),
	})

	const bypassSubmit = (values) => {
		//console.log(values)
		handleSubmit(values)
	}
	if (!questions) {
		return <h2>loading...</h2>
	}
	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500))
					bypassSubmit(values)
				}}>
				{({ values }) => (
					<Form className='card px-5 py-4 mb-4'>
						<h4 className='mb-4'>Please select options below that match your preference</h4>
						<FieldArray name={'response'}>
							{() => (
								<div>
									{values.response.length > 0 &&
										values.response.map((respon, index) => (
											<div className="mb-5" key={index}>
												<div className="row g-3 align-items-center mb-1">
													<div className="card px-0">
														<div className="card-header">
															<span className="mb-2">Question {index + 1}: {questions[index] ? questions[index]?.passage : ''}</span>
														</div>
														<div className="card-body mx-3">
															<div className="row w-75">
																{questions[index] && questions[index].options.map(option =>
																	<div className="form-check col" key={option._id}>
																		<Field
																			name={`response.${index}.choice`}
																			type="radio"
																			value={option.choice}
																			className="form-check-input"
																			required />
																		<label htmlFor={`response.${index}.choice`} className="form-check-label">{option.value}</label>
																	</div>

																)}
															</div>
															<ErrorMessage
																name={`response.${index}.choice`}
																component='span'
																className='text-danger' />
														</div>
													</div>
												</div>
											</div>
										))}
								</div>
							)}
						</FieldArray>
						<h4 className='mb-4'>Please fill in your personal details to complete the survey</h4>
						<div className="row mb-3">
							<div className="col-6">
								<label htmlFor={'firstName'} className="form-label">First Name</label>
								<Field
									name={'firstName'}
									placeholder='John'
									type="text"
									className="form-control" required />
								<ErrorMessage
									name={'firstName'}
									component="span"
									className="text-danger mt-2" />
							</div>
							<div className="col-6">
								<label htmlFor={'lastName'} className="form-label">Last Name</label>
								<Field
									name={'lastName'}
									placeholder='Doe'
									type="text"
									className="form-control" required />
								<ErrorMessage
									name={'lastName'}
									component="span"
									className="text-danger mt-2" />
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-6">
								<label htmlFor={'email'} className="form-label">Email</label>
								<Field
									name={'email'}
									placeholder='johndoe@gmail.com'
									type="email"
									className="form-control" required />
								<ErrorMessage
									name={'email'}
									component="span"
									className="text-danger mt-2" />
							</div>
							<div className="col-6">
								<label htmlFor={'phone'} className="form-label">Phone Number</label>
								<Field
									name={'phone'}
									placeholder='+254-712-345-678'
									type="tel"
									className="form-control" required />
								<ErrorMessage
									name={'phone'}
									component="span"
									className="text-danger mt-2" />
							</div>
						</div>
						<div className="d-flex justify-content-center">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</Form>
				)}

			</Formik>
		</>
	)
}

export default SurveyForm