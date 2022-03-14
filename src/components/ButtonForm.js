
import React from 'react'
import { FormspreeProvider } from '@formspree/react'

export const ButtonForm = () => {
return ('create', {
	action: 'https://formspree.io/f/key',
	title: 'How can we help?',
	fields: [
		{
			type: 'email',
			label: 'Email:',
			name: 'email',
			required: true,
			placeholder: 'your@email.com',
		},
		{
			type: 'textarea',
			label: 'Message:',
			name: 'message',
			placeholder: "What's on your mind?",
		},
		{ type: 'submit' },
	],
	styles: {
		title: {
			backgroundColor: 'gray',
		},
		button: {
			backgroundColor: 'gray',
		},
	},
})
}
