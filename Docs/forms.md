
# Notes for new components and functionality for v3.5

## Formik

1. _initialValues_: pass empty str for email, first last name val.
2. the _onSubmit_ submission func is passed to `useFormik()` hook, which returns form state/helper methods w/in formik var.
3. `handleSubmit` and `handleChange` helper methods used for submission & to pass to the input, (or select, textarea), respectively and the current vals of the form
4. use the {formik.handleSubmit} for each form
5. Add H5 label & input for other options and the handleChange func w/ id & name attributes to match the initialValues prop.
   1. v={formik.values.email} for email or v={formik.values.company} for company
6. create `validation` func as const validate and pass to the useFormik() hook
   1. object w/ key:value pairs that are equavilent to values/initV
7. _Component Composition_: I. formik hook w/ init val.; II. validate func for value/field changes and III. submit func
8. validate func runs after change & blur events of visited fields and before submit
    1. (formik.handleBlur passed to input's onBlur prop)
    2. will only allow onSubmit func to pass if it returns {} (no errors)
    3. can use `Yup` validationSchema in lieu of custom func (to be used as validation throughout code)
9. spread _formik.getFieldProps_('propName') in replace of value attribute
10. use react context for integrating w/ top level compos state/methods
    1. (add react context provider around form state/helpers)
11. edit useFormik() hook and replace w/ Formik’s ```jsx <Formik>``` component/render-prop

### Other Tasks

- Yup validation
- MUI components
- module css or css props
- building with Webpack
- debug/test with VS Code or Chrome

```jsx
// after initV, replacing the validate func
validationSchema: Yup.object({
       firstName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       lastName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
     }),
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },});
```

```jsx
const [values, setValues] = React.useState({});
// plain react handleChange
const handleChange = event => {
  setValues(prevValues => ({
    ...prevValues,
    [event.target.name]: event.target.value
  }))
}
```

```js
(property) FormikConfig<Values>.validate?: ((values: {
    firstName: string;
    lastName: string;
    email: string;
}) => void | object | Promise<FormikErrors<{
    firstName: string;
    lastName: string;
    email: string;
}>>) | ((values: {
    ...;
}) => void | ... 1 more ... | Promise<...>)

// Validation func: returns err, or promise that will use err object where the key:value pairs correspond
```

## Server Info for Email Contact

[]: #
[]: # ### Server Contact iCloud proxy email
[]: #
[]: # - Email: []
[]: # - Phone: []
[]: # - Address: []
[]: #

## Nodemailer

1. Express
2. Serverless v MongoDb
3. Connect to frontend
4. Security
5. Testing

## Formspree

1. Wraping component in provider and adding to top level component
2. Using with Axios, Yup (validation), Formik
3. Testing with server

## No-IP

1. Email Servers
   1. _POP3_: only available on the mail client that the POP3 server is set on.
   2. _IMAP_: check your emails from several different devices
   3. Mail Forwarding
   4. _SMTP_ (Port 25; Alternate-Port), Backup MX, Mail Reflector
      1. used for blocked port 25
   5. _FTP_: Port 21 File Transfer Protocol servers
      1. share/host data that's too large for email on your pc
2. Webmail service <https://mail.noip.com/>. (access emails)
   1. enter hostname of email server in the external mail exchanger field (MX Record)

## Web Server

1. Port 80
2. Backend with
   1. Python
   2. Express
3. Apache OpenSSL or ModSSL
4. Heroku
   1. deploying
   2. postgresql cloud db
   3. mongodb cloud integration
      1. use mongo client
      2. create front end component
5. Azure
   1. Server (SQL)
   2. database
      1. MariaDB
      2. CosmosDB
6. Vercel
   1. Deploy
   2. integrate with Formik & Formspree
7. Building Backend
   1. Multiple Repos
   2. How to test with local server
   3. How to build for production
   4. Security
