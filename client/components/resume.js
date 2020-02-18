import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <div className="title">MY RESUME</div>
        <div className="resume-btn-container">
          <a href="./assets/TonyWong-Resume.pdf" className="resume-btn">
            View Resume
          </a>
          <a
            href="./assets/TonyWong-Resume.pdf"
            download="TonyWong-Resume"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;
