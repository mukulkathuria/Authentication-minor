import React from "react";
import { Field, ErrorMessage } from "formik";
import {InputsGroup,InputDiv,Labels} from './inputs.style';

const Inputs = (props) => {
  const { label, name, ...rest } = props;
  return (
    <InputsGroup>
      <Labels>{label}</Labels>
      <InputDiv><Field name={name} {...rest} />
      <ErrorMessage name={name} />
      </InputDiv>
    </InputsGroup>
  );
};
export default Inputs;
