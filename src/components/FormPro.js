// @ts-nocheck
import { useState } from 'react'
import axios from 'axios'
import 'styles/formik.css'

export default function FormPro() {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	})
	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	})
	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			})
			setInputs({
				email: '',
				message: '',
			})
		} else {
			setStatus({
				info: { error: true, msg: msg },
			})
		}
	}
	const handleOnChange = e => {
		e.persist()
		setInputs(prev => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		})
	}
	const handleOnSubmit = e => {
		e.preventDefault()
		setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/{formikKey}',
			data: inputs,
		})
			.then(response => {
				handleServerResponse(true, 'Message Submitted Successfully, Thank you!')
			})
			.catch(error => {
				handleServerResponse(false, error.response.data.error)
			})
	}
	return <main></main>
}
