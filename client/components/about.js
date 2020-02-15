import React, { Component } from "react";
import Technologies from "./technologies";

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
        <Technologies />
        <div id="hobbies">Hobbies</div>
      </div>
    );
  }
}

export default About;
