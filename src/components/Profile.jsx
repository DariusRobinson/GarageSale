import React from "react";
import { grabToken } from "../auth";

const Profile = ({ token, setToken }) => {
  let newToken = grabToken();
  setToken(newToken);

 

  return;
  
};

export default Profile;
