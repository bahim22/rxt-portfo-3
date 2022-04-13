import { useForm, ValidationError, FormspreeProvider } from '@formspree/react';
import '../styles/formik.css';
import React from 'react';
// import mail from 'assets/icons/mail.svg'
// const formKey = process.env.REACT_APP_FORM_ID
// const projectId = process.env.REACT_APP_PROJECT_ID

const ContactForm = () => {
	const [state, handleSubmit] = useForm('contactForm');

	if (state.succeeded) {
		return <p>Thanks for Submitting</p>;
	}

	return (
		<FormspreeProvider project='projectId'>
			{/* must wrap in top level contact component or app component */}
			<form method='POST' onSubmit={handleSubmit} className='form'>
				<label htmlFor='name'>Full Name</label>
				<input id='name' type='text' name='name' required />
				<ValidationError prefix='Name' field='name' className='fieldErrors' errors={state.errors} />

				<label htmlFor='email'>Email</label>
				<input id='email' type='email' name='email' required />
				<ValidationError prefix='Email' field='email' className='fieldErrors' errors={state.errors} />

				<label htmlFor='email'>Message</label>
				<textarea
					id='message'
					// @ts-ignore
					type='message'
					name='message'
					required
				></textarea>
				<ValidationError prefix='Message' field='message' className='fieldErrors' errors={state.errors} />

				<button type='submit' disabled={state.submitting}>
					Submit
				</button>
				<ValidationError className='formErrors' errors={state.errors} />
			</form>
		</FormspreeProvider>
	);
};

export default ContactForm;
