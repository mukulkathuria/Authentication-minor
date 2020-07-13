import React from "react";
import { Auth } from "../../Context/auth";
import { Redirect } from "react-router-dom";
import SignUpForm from "./SignUpForm/signUpForm";
import {
  FormDiv,
  FlexDiv,
  FormHeading,
} from "./signUpPage.style";
import { FaCrown } from "react-icons/fa";

const SignUpPage = () => {
  const [auth] = React.useContext(Auth);
  if (auth.data) return <Redirect to="/user/Mike" />;
  return (
      <FlexDiv>
        <FormDiv>
          <FormHeading>
            <FaCrown />
            <h2>Create an Account</h2>
          </FormHeading>
          <SignUpForm />
        </FormDiv>
      </FlexDiv>
  );
};
export default SignUpPage;
