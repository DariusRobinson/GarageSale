import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register, Login, Profile, Posts, CreatePost } from "./";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />

        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />

        <Route
          path="/me"
          element={<Profile token={token} setToken={setToken} />}
        />

        <Route
          path="/posts"
          element={<Posts token={token} setToken={setToken} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
