import { getStaticContextFromError } from "@remix-run/router";
import React from "react";
const gianniCohort = `2209-ftb-et-web-am`;

const APIURL = `https://strangers-things.herokuapp.com/api/${gianniCohort}`;

//User API Functions

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
    console.log("This is your result", result);
    const token = result.data.token;
    return token;
  } catch (error) {
    console.error("Error in the register API fetch", error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const respose = await fetch(`${APIURL}/users/login`, {
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
    const result = await respose.json();
    console.log("this is result from login", result);
    return result.data.token;
  } catch (error) {
    console.error("Error in the login API fetch", error);
  }
};

export const myProfile = async (token) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in the myProfile fetch", error);
  }
};

//Posts API Functions

export const GetPosts = async (token) => {
  try {
    const response = await fetch(`${APIURL}/posts`, {
      headers: {
        "Content-Type": "applications/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.error("Error getting all posts", error);
  }
};

export const createNewPost = async (posts, token) => {
  try {
    const response = await fetch(`${APIURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: posts,
      }),
    });
    const result = await response.json();
    console.log("result ??", result)
  } catch (error) {
    console.error(error);
  }
};
