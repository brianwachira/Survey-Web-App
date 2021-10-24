import React from 'react'
import { useContext } from 'react'
import { setNotification } from '../state/notification.reducer'
import { GlobalContext } from '../state/provider'

const NotificationBar = () => {
	const { notification, dispatchNotification } = useContext(GlobalContext)

	if(!notification) {
		return null
	}

	const handleClose = () => {
		dispatchNotification(setNotification(''))
	}
	return (
		<>
			<section className={'notification-bar'}>
				<div className="container">
					<div className="d-flex justify-content-around">
						<p className="mb-0">&#10004; {notification}</p>
						<img
							src={'/assets/icons/close.png'}
							width={25}
							height={25}
							alt=""
							onClick={() => handleClose()}/>
					</div>
				</div>
			</section>
		</>
	)
}
export default NotificationBar