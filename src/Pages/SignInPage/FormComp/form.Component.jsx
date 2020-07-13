import React from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import FormikControl from "../../../Components/Formik/formikControl";
import initialValue from "./Validation/initials";
import validationSchema from "./Validation/validations";

const SignInForm = (props) => {
  const onSubmit = (values, submitprops) => {
    axios
      .post("http://localhost:9000/users/login", values)
      .then((res) => {
        const { headers } = res;
        sessionStorage.setItem("x-token", headers["x-auth-token"]);
        window.location = "/user/Mike";
      })
      .catch((err) => {
        submitprops.setSubmitting(false);
        submitprops.setFieldError("password", err.response.data.message);
      });
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            name="email"
            type="email"
            label="Email"
            autoComplete="new-password"
          />
          <FormikControl
            control="input"
            name="password"
            type="password"
            label="Password"
          />
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Checking User' : 'Login'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignInForm;
