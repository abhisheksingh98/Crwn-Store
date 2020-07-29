import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, SignUpTitleContainer } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <SignUpTitleContainer>I do not have an account</SignUpTitleContainer>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          handleChange={handleChange}
          value={displayName}
          label="Display Name"
          required
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          value={confirmPassword}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: signUpDetails => dispatch(signUpStart(signUpDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);
