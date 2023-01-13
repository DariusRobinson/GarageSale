import React, { useState } from "react";
import { createNewPost } from "../api";
import { grabToken } from "../auth";

const CreatePost = ({ token, setToken, canCreate, setCanCreate }) => {
  
  const handleSubmit= async (event) => {
    event.preventDefault();
    const newToken = grabToken();
    token = newToken;
    const data = event.target;

    const title = data.title.value;
    console.log("this should be the correcet response", title);
    const description = data.description.value;
    const price = data.price.value;
    const willDeliver = data.willDeliver.value;
    const postObj = { title, description, price, willDeliver };

    // const response = await createNewPost(token, { postObj });
    
  };
  const click = async (event) => {
    event.preventDefault();
    setCanCreate(false);
  };

  return (
    <div>
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
          <label htmlFor="willDeliver">
            Will Deliver?
            <input
              className="createPostInput"
              placeholder="Will Deliver"
              name="checkbox"
              type="checkbox"
              required
            />
          </label>
        </fieldset>
        <button className="createPostSubmit" onSubmit={handleSubmit}>
          Create
        </button>
        <button className="cancelBtn" onClick={click}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
