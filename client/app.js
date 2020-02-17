import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Home, About, Works } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Works />
    </Router>
  );
};

export default App;
