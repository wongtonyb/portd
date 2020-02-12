import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Home, About } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
    </Router>
  );
};

export default App;
