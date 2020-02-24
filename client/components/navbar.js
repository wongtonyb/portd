import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <div id="logo">TONY WONG</div>
        <div id="navbar-links">
          {/* middle links */}
          <div id="pagenav">
            <a href="#nav" className="navlinks">
              HOME
            </a>
            <a href="#about" className="navlinks">
              ABOUT
            </a>
            <a href="#technologies" className="navlinks">
              TECH
            </a>
            <a href="#works" className="navlinks">
              WORKS
            </a>
            <a href="#footer" className="navlinks">
              CONTACT
            </a>
          </div>
          {/* icon links */}
          <div id="iconnav">
            <a
              href="https://www.linkedin.com/in/wongtonyb/"
              className="iconlinks"
            >
              <img
                src="./assets/nav/linkedin.png"
                alt="linkedin"
                className="nav-icon"
              />
            </a>
            <a href="https://github.com/wongtonyb" className="iconlinks">
              <img
                src="./assets/nav/github.png"
                alt="linkedin"
                className="nav-icon"
              />
            </a>
            <a href="mailto:wongtonyb@gmail.com" className="iconlinks">
              <img
                src="./assets/nav/email.png"
                alt="linkedin"
                className="nav-icon"
              />
            </a>
          </div>
        </div>
        {/* hamburger link */}
        <a className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>
    );
  }
}

export default Navbar;
