import React from "react";
import { registerUser } from "../api";


const Register = () => {

async function handleClick(event){
    event.preventdefault();


}
 return (
  <>
  <button className="registerBtn">Register</button>
  </>);
}
 
export default Register;
