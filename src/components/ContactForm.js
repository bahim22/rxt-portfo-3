import { useForm, ValidationError } from '@formspree/react'
import '/src/styles/form.css'
import React from 'react'

const formKey = process.env.REACT_APP_FORM_ID

const ContactForm = () => {
    const [state, handleSubmit] = useForm(formKey)

    if (state.succeeded) {
        return <p>Thanks for Submitting</p>
    }

    return (
        <form method='POST' onSubmit={handleSubmit} className='form'>
            <label htmlFor='name'>Full Name</label>
            <input id='name' type='text' name='name' required />
            <ValidationError prefix='Name' field='name' className='fieldErrors' errors={state.errors} />

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' required />
            <ValidationError prefix='Email' field='email' className='fieldErrors' errors={state.errors} />

            <label htmlFor='email'>Message</label>
            <textarea id='message' type='message' name='message' required></textarea>
            <ValidationError prefix='Message' field='message' className='fieldErrors' errors={state.errors} />

            <button type='submit' disabled={state.submitting}>
                Submit
            </button>
            <ValidationError className='formErrors' errors={state.errors} />
        </form>
    )
}

export default ContactForm
