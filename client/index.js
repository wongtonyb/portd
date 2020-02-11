// entry point for client JS
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
// import "../public/style.css";

ReactDOM.render(
  <App />,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
