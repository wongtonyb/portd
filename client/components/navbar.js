import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <p id="logo">TONY WONG</p>
        <div id="navbar-links">
          {/* middle links */}
          <div id="pagenav">
            <a href="#nav" className="navlinks">
              HOME
            </a>
            <a href="#about" className="navlinks">
              ABOUT
            </a>
            <a className="navlinks">BIO</a>
            <a className="navlinks">WORKS</a>
            <a className="navlinks">CONTACT</a>
          </div>
          {/* icon links */}
          <div id="iconnav">
            <a className="iconlinks">LinkedIn</a>
            <a className="iconlinks">gitHub</a>
          </div>
        </div>
        {/* hamburger link */}
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>
    );
  }
}

export default Navbar;
