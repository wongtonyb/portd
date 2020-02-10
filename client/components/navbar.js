import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <p id="logo">TONY WONG</p>
        <div id="pagenav">
          <a className="navlinks">HOME</a>
          <a className="navlinks">ABOUT</a>
          <a className="navlinks">WORKS</a>
          <a className="navlinks">CONTACT</a>
        </div>
        <div id="iconnav">
          <a className="iconlinks">LinkedIn</a>
          <a className="iconlinks">gitHub</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
