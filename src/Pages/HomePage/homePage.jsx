import React from "react";
import { BackgroundDiv, MainHeading } from "./homePage.style";

const HomePage = (props) => {
  return (
    <BackgroundDiv>
      <MainHeading>
        <h2>Welcome to my Project</h2>
        <p>
          You can Sign In and Create Account with Basic Validation using Yup or
          formik Forms.
        </p>
      </MainHeading>
    </BackgroundDiv>
  );
};

export default HomePage;
