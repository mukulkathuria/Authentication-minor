import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../../../Components/Formik/formikControl";
import initialValue from "./Validation/initials";
import validationSchema from "./Validation/validations";
import axios from "axios";

const SignUpForm = () => {
  const onSubmit = (values, submitprop) => {
    axios
      .post("http://localhost:9000/users/auth", values)
      .then((res) => {
        const { headers } = res;
        sessionStorage.setItem("x-token", headers["x-auth-token"]);
        window.location = "/user/Mike";
      })
      .catch((err) => {
        submitprop.setSubmitting(false);
        submitprop.setFieldError("email", err.response.data.message);
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
          <FormikControl control="input" name="name" type="text" label="Name" />
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
            {formik.isSubmitting ? "Submitting" : "Create Account"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignUpForm;
