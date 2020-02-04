import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <div id="logo">TONY WONG</div>
        <div id="pagenav">
          <a>HOME</a>
          <a>ABOUT</a>
          <a>WORKS</a>
          <a>CONTACT</a>
        </div>
        <div id="iconnav">
          <a>LinkedIn</a>
          <a>gitHub</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
