import React from "react";
import Inputs from "./formikInputs";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Inputs {...rest} />;
    case "textarea":
      return <Inputs as="textarea" {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
