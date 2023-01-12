import React, { useState } from "react";
import { createNewPost } from "../api";
import { grabToken } from "../auth";

const CreatePost = ({ token, setToken }) => {
  const newToken = grabToken();
  setToken(newToken);

  const handleClick = async (event) => {
    event.preventDefault();
    <form>
      <fieldset>
        <input 
        className="createPostInput"
        placeholder="Title"
        name="title"
        type="text"
        required
        />
      </fieldset>
      <fieldset>
        <input 
        className="createPostInput"
        placeholder="Description"
        name="description"
        type="text"
        required
        />
      </fieldset>
      <fieldset>
        <input 
        className="createPostInput"
        placeholder="Price"
        name="price"
        type="number"
        required
        />
      </fieldset>
      <fieldset>
        <input 
        className="createPostInput"
        placeholder=""
        name="checkbox"
        type="checkbox"
        required
        />
      </fieldset>
    </form>;

    
  };

  return (
    <button className="createPostsFormButtom" onClick={handleClick}>
      Create New Post
    </button>
  );
};

export default CreatePost;
