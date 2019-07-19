import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'
import { useLocalStorage } from './UseLocalStorage'


const Register = ({ touched, errors}) => {
    const [storedValue, setStoredValue] = useLocalStorage('storedValue')

    if (storedValue) {
        return <Redirect to="/protected" />;
    }

    return ( 
        <div>
            <Form className="form">
                <div className="form-group">
                    <label className="label">Username</label>
                    <Field
                    className="input"
                    name="username"
                    type="text"
                    autoComplete="off"
                    />
                    <p>{touched.username && errors.username}</p>
                </div>
                <div className="form-group">
                    <label className="label">Password</label>
                    <Field
                    className="input"
                    name="password"
                    type="password"
                    autoComplete="off"
                    />
                </div>
                <p>{touched.password && errors.password}</p>
                <button className="btn" type="submit">Submit &rarr;</button>
                </Form>
        </div>
     );
    }
 
export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('Please enter a username'),
    password: Yup.string()
      .min(6)
      .required('Password is required')
  }),
  handleSubmit(values, formikBag) {
    const url = "http://localhost:5000/api/register";
    // if (!localStorage.getItem('token')) {
    axios
      .post(url, values)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        formikBag.props.history.push("/protected")
        console.log("post data", response.data.token)
      })
      .catch(e => {
        console.log(e.response);
      });
  // } else {
  //   axios
  //     .post(`http://localhost:5000/api/login`, values)
  //     .then(response => {
  //       localStorage.setItem("token", response.data.token)
  //       formikBag.props.history.push("/protected")
  //       console.log("post data", response.data.token)
  //     })
  //     .catch(e => {
  //       console.log(e.response);
  //     });
  // }
} 
})(Register);