import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from './textField';
import * as Yup from 'yup';


const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email(15, 'Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required')
    })
  return (
    <Formik
        initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
        // validationSchema={validate}
        onSubmit={values =>{
            console.log(values);
        }}
    >
        {formik => (
            <div>
                <h1 className="my-4 font-weight-bold-diplay-4">Sign Up</h1>
                <Form>
                    <TextField label="First Name" name="firstName" type="text" />
                    <TextField label="Last Name" name="lasttName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                </Form>
            </div>
        )}
    </Formik>
  //   <Formik
  //   initialValues={{
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   }}

  //   validationSchema={validate}
  //   onSubmit={async (values) => {
  //   //   await sleep(500);
  //   console.log(values);
  //   //   alert(JSON.stringify(values, null, 2));
  //   }}
  // >
  //   {({ isSubmitting }) => (
  //     <Form>
  //       <label htmlFor="firstName">First Name</label>
  //       <Field name="firstName" placeholder="Jane" />
  //       <ErrorMessage name="firstName" />

  //       <label htmlFor="lastName">Last Name</label>
  //       <Field name="lastName" placeholder="Doe" />

  //       <label htmlFor="email">Email</label>
  //       <Field name="email" placeholder="jane@acme.com" type="email" />

        

  //       <button type="submit" disabled={isSubmitting}>
  //         Submit
  //       </button>
  //     </Form>
  //   )}
  // </Formik>
  )
}

export default Signup