/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useRef } from 'react'
import './ModalRegister.scss'
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
//import * as Yup from 'yup'
import Button from '../Button'
const RegisterModal = (props) => {
	const closeModal = useRef(null)
	const { label } = props
	//,  handleSubmit
	// const bypassSubmit = (event) => {
	// 	event.preventDefault()
	// 	handleSubmit()
	// 	alert('Survey uploaded succesfully')
	// 	setTimeout(() => {

	// 		//Simulate a click
	// 		closeModal.current.click()

	// 	}, 1000)
	// }

	const initialValues = {
		title: '',
		questions: [
			{
				question: '',
				optionA: '',
				optionB: ''
			},
		]
	}
	return (
		<>
			{/* <!-- Button trigger modal --> */}
			<button type="button" className="btn  btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">{label} <i className="fa fa-plus" aria-hidden="true"></i></button>

			{/* <!-- Modal --> */}
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog  modal-lg">
					<div className="modal-content modal-custom">
						<div className="modal-header">
							<h5 className="modal-title text-primary" id="exampleModalLabel">{label}</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<Formik
							initialValues={initialValues}
							onSubmit={async (values) => {
								await new Promise((r) => setTimeout(r, 500))
								alert(JSON.stringify(values, null, 2))
							}}>
							{({ values }) => (
								<Form>
									<div className="modal-body">
										<div className="row g-3 align-items-center mb-5">
											<div className="col-2">
												<label htmlFor={'title'} className="form-label"> Survey Title</label>
											</div>
											<div className="col">
												<Field
													name={'title'}
													placeholder='Effectiveness Of SAT'
													type="text"
													className="form-control" required />
											</div>
											<div className="row">
												<div className="col">
													<ErrorMessage
														name={'title'}
														component="span"
														className="field-error" />
												</div>
											</div>
										</div>
										<FieldArray name={'questions'}>
											{({ remove, push }) => (
												<div>
													{values.questions.length > 0 &&
                                                        values.questions.map((question, index) => (
                                                        	<div className="mb-3" key={index}>
                                                        		<div className="row g-3 align-items-center mb-2">
                                                        			<div className="col-2">
                                                        				<label htmlFor={`questions.${index}.question`} className="form-label">Question {index + 1}</label>
                                                        			</div>
                                                        			<div className="col">
                                                        				<Field
                                                        					name={`questions.${index}.question`}
                                                        					placeholder='All that to consider one a success?'
                                                        					type="text"
                                                        					className="form-control" required />
                                                        			</div>
                                                        			<div className="row">
                                                        				<div className="col">
                                                        					<ErrorMessage
                                                        						name={`questions.${index}.question`}
                                                        						component="span"
                                                        						className="field-error" />
                                                        				</div>
                                                        			</div>
                                                        		</div>
                                                        		<div className="row g-3 align-items-center mb-2">
                                                        			<div className="col-2">
                                                        				<label htmlFor={`questions.${index}.optionA`} className="form-label">Option A</label>
                                                        			</div>
                                                        			<div className="col">
                                                        				<Field
                                                        					name={`questions.${index}.optionA`}
                                                        					placeholder='Gaddamit! the system is rigged'
                                                        					type="text"
                                                        					className="form-control" required />
                                                        			</div>
                                                        			<div className="row">
                                                        				<ErrorMessage
                                                        					name={`questions.${index}.optionA`}
                                                        					component="span"
                                                        					className="field-error" />
                                                        			</div>
                                                        		</div>
                                                        		<div className="row g-3 align-items-center mb-0">
                                                        			<div className="col-2">
                                                        				<label htmlFor={`questions.${index}.optionB`} className="form-label">Option B</label>
                                                        			</div>
                                                        			<div className="col">
                                                        				<Field
                                                        					name={`questions.${index}.optionB`}
                                                        					placeholder='Well, they might have a point.'
                                                        					type="text"
                                                        					className="form-control" required />
                                                        			</div>
                                                        			<div className="row">
                                                        				<ErrorMessage
                                                        					name={`questions.${index}.optionB`}
                                                        					component="span"
                                                        					className="field-error" />
                                                        			</div>
                                                        		</div>

                                                        		<Button label="Discard" className="btn btn-danger mb-3" onClick={() => remove(index)} />
                                                        	</div>
                                                        ))}
													<Button label="Add another question" className="btn btn-success mb-3" onClick={() => push({ question: '', optionA: '', optionB: '' })} />
												</div>
											)}
										</FieldArray>
										<div className="modal-footer">
											<Button type="button" label="Cancel" className="btn btn-secondary " data-bs-dismiss="modal" ref={closeModal} />
											<Button type="submit" label="Submit" className="btn btn-primary" />
										</div>
									</div>
								</Form>
							)}

						</Formik>
					</div>
				</div>
			</div>

		</>
	)
}

export default RegisterModal