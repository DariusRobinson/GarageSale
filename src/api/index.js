import React from "react";

const cohortName = "2206-FTB-ET-WEB-FT";
const APIURL = `https://strangers-things.herokuapp.com/api${cohortName}`;

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log('This is your result', result)
  } catch (error) {
    console.error(error, "Error in the register API fetch");
  }
};