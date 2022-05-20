import { useState } from 'react';
import axios from 'axios';
import './styles/formik.css';
// const key = process.env.KEY;
const Key = process.env.REACT_APP_FORM_ID;
// const key = process.env.REACT_APP_FORM_ID;
const projectId = process.env.REACT_APP_PROJID;

const FormPro = () => {
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
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
            method: 'POST',
            // url: `https://formspree.io/f/${key}`,
            // url: `https://formspree.io/f/xrgjabgr`,
            url: `${Key}`,
            data: inputs,
        })
            // eslint-disable-next-line no-unused-vars
            .then((response) => {
                handleServerResponse(true, 'Message Submitted Successfully. Thank you!');
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
	};
	return (
		<main>
			<header>
				<div>
					<img src='https://i.imgur.com/qkdpN.png' alt='logo' />
					<img src='assets/himacard.png' alt='logo card' />
				</div>
				<h1>Contact Me Today</h1>
			</header>
			<hr />
			<form onSubmit={handleOnSubmit}>
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
		</main>
	);
};

export default FormPro;
