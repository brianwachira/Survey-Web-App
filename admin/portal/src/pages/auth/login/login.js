import { Formik } from 'formik'
import React from 'react'
import LoginForm from '../../../components/LogInForm'
import * as Yup from 'yup'
import loginService from '../../../services/login'

const Login = () => {
	const initialValues = {
		username: '',
		password: '',
	}

	const validationSchema = Yup.object().shape({
		username: Yup.string().min(2, 'Too Short!').required('Username is required'),
		password: Yup.string().min(2, 'Too Short!').required('Password is required')
	})

	const onSubmit = async (values) => {
		try {
			const response = await loginService.login({
				username: values.username,
				password: values.password
			})
			// save token on local storage
			window.localStorage.setItem(
				'user', JSON.stringify(response)
			)
			alert('login Successful! Redirecting...')
			setTimeout(() => {
				window.location.href = `${window.location.protocol}//${window.location.host}`
			}, 1000)

		} catch (error) {
			alert(error.response.data.error)
		}
	}
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}>
				{({ handleSubmit }) => <LoginForm onSubmit={handleSubmit}/>}
			</Formik>
		</>
	)
}

export default Login