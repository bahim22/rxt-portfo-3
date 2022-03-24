import { useForm, ValidationError, FormspreeProvider } from '@formspree/react'
import '/src/styles/form.css'
import React from 'react'

// const formKey = process.env.REACT_APP_FORM_ID

const ContactForm = () => {
    const [state, handleSubmit] = useForm("contactForm")

    if (state.succeeded) {
        return <p>Thanks for Submitting</p>
    }

    return (
      <FormspreeProvider project="projectId">
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
      </FormspreeProvider>
    )
}

export default ContactForm

// @ts-nocheck
// will add proper formkey .env config for this branch before dev/testing
/*
import { FormspreeProvider } from '@formspree/react'
// import formKey from '.env' 


const projectId = process.env.REACT_APP_PROJECT_ID

export function Form() {
    const [state, handleSubmit] = useForm(formKey)
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }
    return (
      <FormspreeProvider project="projectId">
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input id='email' type='email' name='email' />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
            <textarea id='message' name='message' />
            <ValidationError prefix='Message' field='message' errors={state.errors} />
            <button type='submit' disabled={state.submitting}>
                Submit
            </button>
        </form>
      </FormspreeProvider>
    )
}
*/
