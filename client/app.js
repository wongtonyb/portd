import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Home, About, Works, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Footer />
    </Router>
  );
};

export default App;
