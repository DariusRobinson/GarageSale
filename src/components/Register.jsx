import React from "react";
import { registerUser } from "../api";

const Register = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    await registerUser(username, password);

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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
