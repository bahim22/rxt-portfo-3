// @ts-nocheck
// will add proper formkey .env config for this branch before dev/testing

import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import formKey from '.env' // eslint-disable-line no-unused-vars

export default function Form() {
    const formKey = process.env.REACT_APP_FORM_ID
    // @ts-ignore
    const [state, handleSubmit] = useForm({ formKey })
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }
    return (
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
    )
}
