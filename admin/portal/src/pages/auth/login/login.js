import { Formik } from 'formik'
import React from 'react'
import LoginForm from '../../../components/LogInForm'
import * as Yup from 'yup'
import loginService from '../../../services/login'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../state/notification.reducer'

const Login = () => {

	const dispatch = useDispatch()
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
			//create a notification
			const successNotification = {
				hasError: false,
				title: 'Log In Success!',
				message: 'Log in successful'
			}
			//set notification
			dispatch(setNotification(successNotification))
			//unset notification upon success
			setTimeout(() => {
				dispatch(setNotification({ ...successNotification,title:'', message: '' }))
			}, 2000)
			//refresh page
			setTimeout(() => {
				window.location.href = `${window.location.protocol}//${window.location.host}`
			}, 1000)

		} catch (error) {
			//create a notification
			const failedNotification = {
				hasError: true,
				title: 'Log In Failed!',
				message: `Log In Failed! ${error?.response?.data?.error}`
			}
			//set notification
			dispatch(setNotification(failedNotification))
			// //unset notification upon success
			setTimeout(() => {
				dispatch(setNotification({ ...failedNotification,title:'', message: '' }))
			}, 2000)
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