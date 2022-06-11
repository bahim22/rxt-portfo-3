import React, { useState } from 'react';
import axios from 'axios';
// import './styles/Form.css';
import './styles/Info.css';

export default function FormPro() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
                submitting: false,
                submitted: false,
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        // @ts-ignore
        // const formspree = process.env.REACT_APP_FORM_ID;
        const fkey = process.env.REACT_APP_KEY;
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            // url: `https://formspree.io/f/${fkey}`, //|| url: {formspree},
            // url: `${formspree} || https://formspree.io/f/xrgjabgr`,
            // url: ${formspree},
            url: `https://formspree.io/f/xrgjabgr`,
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(true, 'Message Submitted Successfully. Thank you!');
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
    return (
        <>
            <header id='contact'>
                <div>
                    <img width='100%' height='300' src='https://i.imgur.com/qkdpN.png' alt='logo' />
                    {/* <img src='/rocket.png' alt='logo card' /> */}
                </div>
            </header>
            <h1>Contact Me Today</h1>
            <hr />
            <form onSubmit={handleOnSubmit} method='POST'>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    name='_replyto'
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                />
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' onChange={handleOnChange} required value={inputs.message} />
                <button type='submit' disabled={status.submitting}>
                    {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
                </button>
            </form>
            {status.info.error && <div className='error'>Error: {status.info.msg}</div>}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </>
    );
}

// export default FormPro;
