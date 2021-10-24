import React from 'react'
import { useReducer, createContext } from 'react'
import { notificationReducer } from './notification.reducer'

// create globalcontext
export const GlobalContext = createContext()
export const GlobalProvider = ({ children }) => {
	const [notification, dispatchNotification] = useReducer(notificationReducer, '')

	return (
		<GlobalContext.Provider
			value={{
				notification,
				dispatchNotification
			}}>
			{children}
		</GlobalContext.Provider>
	)

}

