import React from 'react'
import { FormspreeProvider } from '@formspree/react'

/* 5 ways of adding formspree to app
  Todo: compare with other options (Azure, netlify) and convert to JSX
 <!-- modify this form HTML and place wherever you want your form --> */

const AjaxForm = () => {
  return (
  <div>
    <form id="my-form" action="https://formspree.io/f/{formKey}" method="POST">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <input type="text" name="message" />
      <button id="my-form-button">Submit</button>
      <p id="my-form-status"></p>
    </form>
  </div>
  )
}
export default AjaxForm
// <!-- Place this script at the end of the body tag -->

export const AjaxFormScript = () => {
  return (
    <>
      {/* <script> */}
      <div>
        let form = document.getElementById("my-form");
         async function handleSubmit(event) {
          event.preventDefault()
          let status = document.getElementById("my-form-status");
          let data = new FormData(event.target);
          fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
          }).then(response => {
            return (
              if (response.ok) {
              status.innerHTML = "Thanks for your submission!";
              form.reset()
            } else {
              response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                  status.innerHTML = "Oops! There was a problem submitting your form"
                }
              })
            })
          }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
          });
       )}
        form.addEventListener("submit", handleSubmit)
      {/* </script> */}
      </div>
    </>
  )
}

/*
New Section 2

 /////////////////////
 original ajax code from formspree

 <!-- modify this form HTML and place wherever you want your form -->
<form id="my-form" action="https://formspree.io/f/{formKey}" method="POST">
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <input type="text" name="message" />
  <button id="my-form-button">Submit</button>
  <p id="my-form-status"></p>
</form>
<!-- Place this script at the end of the body tag -->
<script>
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
</script>
 */

/////////////////////////


/* New section 3
//////

Button form from previous commit

export const ButtonForm = () => {
  return ('create', {
	action: 'https://formspree.io/f/{formKey}',
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
} */


/////////////////////////


/* New Section 4
//////

form button original

/* <!-- docs: formspree.io/formbutton/docs. Ex: codepen.io/formspree -->

<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
<script>
  /* paste this line in verbatim
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below
  formbutton("create", {
    action: "https://formspree.io/f/{(abcdefhy) || {formKey}}",
    // action: 'https://formspree.io/f/abcdefgh',
    title: "How can we help?",
    fields: [
      {
        type: "email",
        label: "Email:",
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });
</script>

/////////////////////////

/* New section 5

<!-- modify this form HTML and place wherever you want your form
H5 with form upload-->

<form
  action="https://formspree.io/f/{formKey}"
  method="POST"
  enctype="multipart/form-data"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your file:
    <input type="file" name="upload">
  </label>
  <button type="submit">Send</button>
</form>
 */
