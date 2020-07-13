import React from "react";
import SignInForm from "./FormComp/form.Component";
import { SignForm, FlexDiv, FormHeading } from "./signIn.style";
import { Redirect } from "react-router-dom";
import { Auth } from "../../Context/auth";
import { FaCrown } from "react-icons/fa";

const SignIn = () => {
  const [auth] = React.useContext(Auth);
  if (auth.data) return <Redirect to="/user/Mike" />;
  return (
    <FlexDiv>
      <SignForm>
        <FormHeading>
          <FaCrown />
          <h2>Login</h2>
        </FormHeading>
        <SignInForm />
      </SignForm>
    </FlexDiv>
  );
};
export default SignIn;
