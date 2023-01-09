import React from "react";
import { loginUser } from "../api";
import { storeToken } from "../auth";

const Login = ({token, setToken}) => {
async function handleSubmit(event){
    event.preventDefault();
    let username = event.target.username.value
    let password = event.target.password.value
    console.log(username,'username')
    console.log(password,'password')
  let userToken = await loginUser(username, password)
    storeToken(userToken)
    setToken(userToken)


}

    return(
        <form className="loginForm" onSubmit={handleSubmit}>
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
            <button className="submitBtn" type="submit">Login</button>
        </form>
    )
}


export default Login;