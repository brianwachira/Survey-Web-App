import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../state/notification.reducer'

const NotificationBar = () => {

	const dispatch = useDispatch()

	const state = useSelector(state => state)

	if (!state.notification.message) {
		return null
	}

	const handleClose = () => {
		const newNotification = {
			...state.notification,
			title: '',
			message: ''
		}
		dispatch(setNotification(newNotification))
	}
	return (
		<>
			<section className={'notification-bar'}>
				<div className="container">
					<div className="d-flex justify-content-around">
						<p className="mb-0">&#10004; {state.notification.message}</p>
						<i className="fa fa-times-circle fa-2x" aria-hidden="true" onClick={() => handleClose()}></i>
					</div>
				</div>
			</section>
		</>
	)
}
export default NotificationBar