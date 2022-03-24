
# Notes for new components and functionality for v2

## Forms

## Formspree

## Formik

1. initialValues: pass empty str for email, first last name val.
2. the onSubmit submission func is passed to useFormik() hook
3. useFormik() returns form state/helper methods w/in formik var.
4. handleSubmit and handleChange helper methods used for submission & to pass to the input, (or select, textarea), respectively and the current vals of the form
5. use the {formik.handleSubmit} for each form
6. Add H5 label & input for other options and the handleChange func w/ id & name H5 attributes to match the initialValues prop.
   1. v={formik.values.email} for email or v={formik.values.company} for company
7. create validation func as const validate and pass to the useFormik() hook
   1. object w/ key:value pairs that are equavilent to values/initV
8. Composed of the formik hook w/ init val.; validate func for value/field changes and a submit func
9. validate func runs after change &/or blur events of visited fields (formik.handleBlur passed to input's onBlur prop) and before submit
    1. will only allow onSubmit func to pass if it returns {} (no errors)
    2. can use Yup validationSchema in lieu of custom func
10. reuse validation methods across app consistenly
11. spread formik.getFieldProps('propName') in replace of value attribute
12. use react context for integrating w/ top level compos state/methods (add react context provider around form state/helpers)
13. edit useFormik() hook and replace w/ Formik’s Formik component/render-prop

>
```js
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

Validation function. Must return an error object or promise that throws an error object where that object keys map to corresponding value.
```
## React Hook Forms