import React from "react";
const gianniCohort = `2209-ftb-et-web-am`
const cohortName = "2206-FTB-ET-WEB-FT";
const APIURL = `https://strangers-things.herokuapp.com/api/${gianniCohort}`;

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log('This is your result', result)
    const token = result.data.token
    return token
  } catch (error) {
    console.error("Error in the register API fetch", error);
  }
};
