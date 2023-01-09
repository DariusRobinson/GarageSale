import React, {useState} from "react";
import { registerUser } from "../api";
import { storeToken } from "../auth";

const Register = ({token, setToken}) => {
  async function handleSubmit(event) {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
   const userToken =  await registerUser(username, password);
   setToken(userToken);
  storeToken(userToken);
  

  }
  return (
    <>
      <form className="registerForm" onSubmit={handleSubmit}>
        <fieldset>
          <input
            className="registerInput"
            placeholder="username"
            name="username"
            type="text"
            required
          />
        </fieldset>
        <fieldset>
          <input
            className="registerInput"
            placeholder="password"
            name="password"
            type="text"
            required
          />
        </fieldset>
        <button className="submitBtn" type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
