import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";
import {
  SignInContainer,
  SignInTitleContainer,
  SignInButtonContainer
} from "./sign-in.styles";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitleContainer>I already have an account</SignInTitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <SignInButtonContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </SignInButtonContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = disptach => ({
  googleSignInStart: () => disptach(googleSignInStart()),
  emailSignInStart: (email, password) =>
    disptach(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
