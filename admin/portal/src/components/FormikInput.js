import React from 'react'
import { useField } from 'formik'

const FormikInput = (props) => {
	const [field, meta, helpers] = useField(props.name)

	// Check if the field is touched and the error message is present
	const showError = meta.touched && meta.error

	return (
		<>
			<input
				onChange={(value) => helpers.setValue(value)}
				value={field.value}
				error={showError}
				{...props}
			/>
			{/* Show the error message if the value of showError variable is true */}
			{showError && <span className={'text-danger'}>{meta.error}</span>}
		</>
	)

}

export default FormikInput