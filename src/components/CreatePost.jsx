import React, { useState } from "react";
import { createNewPost } from "../api";
import { grabToken } from "../auth";

const CreatePost = ({
  token,
  setToken,
  canCreate,
  setCanCreate,
  allPost,
  setAllPost,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const theToken = grabToken(token);

  const click = async (event) => {
    event.preventDefault();
    setCanCreate(false);
  };

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const postObj = {
            title: title,
            description: description,
            price: price,
            willDeliver: willDeliver,
          };

          const response = await createNewPost(postObj, theToken);
          console.log("response", response);

          // const response = await createNewPost(postObj, theToken);
          // setAllPost((prevState) => [...prevState, response.data.post]);

          let newPost = [...allPost];
          newPost.push(response.data.post);
          let finalPost = [...newPost];
          console.log("old", allPost);
          console.log("new", newPost);
          setAllPost(finalPost); // update the state variable and trigger a rerender

          setCanCreate(false);
        }}

        // onSubmit={async (event) => {
        //   event.preventDefault();
        //   const postObj = {
        //     title: title,
        //     description: description,
        //     price: price,
        //     willDeliver: willDeliver,
        //   };

        //   const response = await createNewPost(postObj, theToken);
        //   console.log("response", response);

        //   let newPost = [...allPost];
        //   newPost.push(response.data.post);
        //   let finalPost = [...newPost];
        //   console.log("old", allPost);
        //   console.log("new", newPost);
        //   setAllPost(finalPost);

        //   // newPost.forEach((singlePost) => {
        //   //   if (singlePost._id === response._id) {
        //   //     let finalPost = newPost.Push(singlePost);

        //   //     setAllPost(newPost);
        //   //   }
        //   // });
        //   // console.log(allPost);
        //   setCanCreate(false);
        // }}
      >
        <fieldset>
          <input
            className="createPostInput"
            placeholder="Title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(event) => {
              event.preventDefault();
              setTitle(event.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            className="createPostInput"
            placeholder="Description"
            name="description"
            type="text"
            required
            value={description}
            onChange={(event) => {
              event.preventDefault();
              setDescription(event.target.value);
              console.log(description);
            }}
          />
        </fieldset>
        <fieldset>
          <input
            className="createPostInput"
            placeholder="Price"
            name="price"
            type="number"
            required
            value={price}
            onChange={(event) => {
              event.preventDefault();
              setPrice(event.target.value);
              console.log(price);
            }}
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
              onChange={(event) => {
                setWillDeliver(!willDeliver);
              }}
            />
          </label>
        </fieldset>
        <button className="createPostSubmit" type="submit">
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
