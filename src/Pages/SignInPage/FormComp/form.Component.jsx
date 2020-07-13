import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../../../Components/Formik/formikControl";
import initialValue from "./Validation/initials";
import validationSchema from "./Validation/validations";
import onSubmitForm from "./Validation/submitting";

const SignInForm = () => {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
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
            {formik.isSubmitting ? "Checking User" : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignInForm;
