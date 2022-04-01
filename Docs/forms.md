
# Notes for new components and functionality for v3.5

# Forms

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

## Formspree
