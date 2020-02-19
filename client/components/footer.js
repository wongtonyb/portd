import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div id="footer-icons">
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
        <h5>©2020 | Developed by Tony Wong</h5>
      </footer>
    );
  }
}

export default Footer;
