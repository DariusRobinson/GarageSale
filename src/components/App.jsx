import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
