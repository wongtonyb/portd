import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about">
        <h1>ABOUT ME</h1>
        <div id="about-intro">
          <div id="hi-my-name">HI, MY NAME IS TONY</div>
          <p id="bio">
            I am a fullstack developer and software engineer based in NYC with a
            background in mechanical engineering, physics and mathematics. I was
            first introduced to the power of programming in college, and shortly
            after graduating I decided to continue down this path by enrolling
            in Fullstack Academy's rigorous immersive software engineering
            program. Through this program, I fell in love with the amazing
            supportive community and all the facsinating emerging technologies
            involved in software development. As I continue on this journey, my
            passion for software engineering also continues to grow.
          </p>
        </div>
        <div id="technologies">
          <h2>Technologies I've worked with</h2>
          <div id="tech-container">
            <div className="tech-title">Front End</div>
            <div className="tech-icon-container">
              <img
                src="/assets/tech/react.png"
                alt="react/react-native"
                className="tech-icon"
              />
            </div>
          </div>
        </div>
        <div id="hobbies">Hobbies</div>
      </div>
    );
  }
}

export default About;
