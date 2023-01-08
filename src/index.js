import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";


// Actually renders my webpage 
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
