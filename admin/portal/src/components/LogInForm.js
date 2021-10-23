/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
//import FormikInput from './FormikInput'
import Button from './Button'
import {  Field, Form, ErrorMessage } from 'formik'

const LoginForm = () => {
	return (
		<main className="form-container">
			<div className="form-signin">
				<Form>
					<i className="fa fa-bar-chart fa-4x mb-4" aria-hidden="true"></i>
					<p className="h5 mb-3 fw-normal text-center">Please sign in</p>
					<div className="mb-3">
						<label htmlFor="" className="form-label">Username</label>
					    <Field id="username" name="username" placeholder="Username" className="form-control" type="text"/>
						<ErrorMessage name="username" className="text-danger"/>
					</div>
					<div className="mb-3">
						<label htmlFor="" className="form-label">Password</label>
						<Field id="password" name="password" placeholder="Password" className="form-control" type="password"/>
						<ErrorMessage name="password"  className="text-danger"/>
					</div>
					<Button label="Log in" type="submit" className="btn btn-primary w-100"/>
				</Form>
			</div>
		</main>
	)
}
export default LoginForm