/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from './Button'

const CreateSurveyForm = ({ handleSubmit }) => {

	//const dispatch = useDispatch()
	const initialValues = {
		title: '',
		questions: [
			{
				question: '',
				optionA: '',
				optionB: ''
			},
			{
				question: '',
				optionA: '',
				optionB: ''
			},
			{
				question: '',
				optionA: '',
				optionB: ''
			},
			{
				question: '',
				optionA: '',
				optionB: ''
			},
			{
				question: '',
				optionA: '',
				optionB: ''
			},
		]
	}

	//add a method for validating unique Questions
	// Yup.addMethod(Yup.array, 'unique', function (message, mapper = (a) => a) {
	// 	return this.test('unique', message, function (list) {
	// 		return list.length === new Set(list.map(mapper)).size
	// 	})
	// })
	// .unique('duplicate question', (a) => a.question)

	const validationSchema = Yup.object().shape({
		title: Yup.string().min(8, 'Too Short').required('Your survey needs a title'),
		questions: Yup.array()
			.of(Yup.object().shape({
				question: Yup.string().required('A question is required'),
				optionA: Yup.string().required('option A is required'),
				optionB: Yup.string().required('option B is required')
			})
			).required('Your survey needs some questions')
	})

	const bypassSubmit = (values) => {
		handleSubmit(values)

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
					<Form>
						<h5 className='mb-4'>Fill in the form below with the questions and options you prefer :)</h5>
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
										className="text-danger mt-2" />
								</div>
							</div>
						</div>
						<FieldArray name={'questions'}>
							{({ remove, push }) => (
								<div>
									{values.questions.length > 0 &&
                                        values.questions.map((question, index) => (
                                        	<div className="mb-5" key={index}>
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
                                        						className="text-danger" />
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
                                        					className="text-danger" />
                                        				{/* {errors && errors.questions &&(
                                        					<span className="text-danger d-block">
                                        						{errors.questions}
                                        					</span>
                                        				)} */}
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
                                        					className="text-danger" />
                                        			</div>
                                        		</div>

                                        		{index + 1 > 5 && <Button label="Discard" className="btn btn-danger mb-3" onClick={() => remove(index)} />}
                                        	</div>
                                        ))}
									<Button label="Add another question" className="btn btn-success mb-3" onClick={() => push({ question: '', optionA: '', optionB: '' })} />
								</div>
							)}
						</FieldArray>
						<Button type="submit" label="Submit" className="btn btn-primary" />
					</Form>
				)}

			</Formik>
		</>
	)
}

export default CreateSurveyForm