import React from "react";
import { loginUser } from "../api";

const Login = () => {
async function handleSubmit(event){
    event.preventDefault();
    let username = event.target.username.value
    let password = event.target.password.value
    console.log(username,'username')
    console.log(password,'password')
    await loginUser(username, password)

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
            <button type="submit">Login</button>
        </form>
    )
}


export default Login;