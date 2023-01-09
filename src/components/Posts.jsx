import React, { useState, useEffect } from "react";
import { GetPosts } from "../api";
import { grabToken } from "../auth";

const Posts = ({ token, setToken }) => {
  const [allPost, setAllPosts] = useState([]);
  const newToken = grabToken();
  setToken(newToken);

  const fetchAllPost = async (token) => {
    const response = await GetPosts(token);
    setAllPosts(response.data.posts);
    return response.data.posts;
  };

  const handleClick = (event) => {
    event.preventDefault();
    fetchAllPost(token);
  };
  return (<div> 
    <button onClick={handleClick}>Test</button>
  <>
  {allPost.map((p)=>{
    return(
        <div key={p._id}>
            <h2 className="postTitle">{p.title}</h2>
            <p className="postsCreator">{p.author.username}</p>
            <p className="postsDescription">{p.description}</p>
            <p className="postsPrice">{p.price}</p>
            <p className="postDelivery">{p.willDeliver}</p>
        </div>
    )
  })}
  </>
 

  </div>
  )

};

export default Posts;
