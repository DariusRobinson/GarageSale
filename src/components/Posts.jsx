import React, { useState, useEffect } from "react";
import { GetPosts } from "../api";
import { grabToken } from "../auth";
import CreatePost from "./CreatePost";

const Posts = ({ token, setToken }) => {
  const [allPost, setAllPosts] = useState([]);
  const [canCreate, setCanCreate] = useState(false);

  const fetchAllPost = async (token) => {
    const response = await GetPosts(token);
    setAllPosts(response.data.posts);
    return response.data.posts;
  };

  useEffect((token) => {
    fetchAllPost(token);
  }, []);
  const newToken = grabToken();
  setToken(newToken);


  return (
    <div>
      
      <button
        onClick={() => {
          setCanCreate(true);
        }}
      >
        Create New Post
      </button>
      {canCreate} ?{" "}
      <>
        <CreatePost allPost={allPost} setAllPosts={setAllPosts} />{" "}
      </>
      : <></>
      <>
        {allPost.map((p) => {
          return (
            <div id="seperatePosts" key={p._id}>
              <h2 className="postTitle">{p.title}</h2>
              <p className="postsCreator">{p.author.username}</p>
              <p className="postsDescription">{p.description}</p>
              <p className="postsPrice">{p.price}</p>
              <p className="postDelivery">{p.willDeliver}</p>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Posts;
