import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Define validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <div className="formik-form">
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik form submitted:", values);
          alert(`Registration successful for ${values.username}`);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" placeholder="Enter your username" />
              <ErrorMessage name="username" component="p" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="p" className="error" />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
