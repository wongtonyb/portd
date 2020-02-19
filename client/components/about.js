import React, { Component } from "react";
import Technologies from "./technologies";
import Resume from "./resume";

class About extends Component {
  render() {
    return (
      <div id="about">
        {/* <h1>ABOUT ME</h1> */}
        {/* <div id="hi-my-name">HI, MY NAME IS TONY</div> */}
        <div className="title">HI, MY NAME IS TONY</div>
        <div id="about-intro">
          <div id="bio-container">
            <div id="left-bio-icons">
              <img
                src="./assets/hobbies/bball.png"
                alt="bball"
                className="bio-icon"
              />
              <img
                src="./assets/hobbies/chess.png"
                alt="chess"
                className="bio-icon"
              />
              <img
                src="./assets/hobbies/food.png"
                alt="food"
                className="bio-icon"
              />
              <img
                src="./assets/hobbies/game.png"
                alt="game"
                className="bio-icon"
              />
            </div>
            <p id="bio">
              I am a fullstack developer and software engineer based in New York
              City with a background in mechanical engineering, physics and
              mathematics. I was first introduced to the power of programming in
              college, and shortly after graduating I decided to continue down
              this path by enrolling in Fullstack Academy's rigorous immersive
              software engineering program. Through this program, I fell in love
              with the amazing supportive community and all the facsinating
              emerging technologies involved in software development. As I
              continue on this journey, my passion for software engineering also
              continues to grow.
              <br />
              <br />
              When I'm not coding, I like to focus my time away from the screen.
              I love being active, so you can probably find me at the gym or on
              the courts. If food's involve, count me in, and if it's delicious,
              I'll be in the kitchen trying to recreate it. I love experiencing
              new things, so I'm always excited to travel. Lastly, I'm always
              down for a game of Chess, Catan or Mafia.
            </p>
            <div id="right-bio-icons">
              <img
                src="./assets/hobbies/chef.png"
                alt="chef"
                className="bio-icon"
              />
              <img
                src="./assets/hobbies/gym.png"
                alt="gym"
                className="bio-icon"
              />
              <img
                src="./assets/hobbies/sushi.png"
                alt="sushi"
                className="bio-icon"
              />
              <img
                src="./assets/hobbies/travel.png"
                alt="travel"
                className="bio-icon"
              />
            </div>
          </div>
        </div>
        <Resume />
        <Technologies />
      </div>
    );
  }
}

export default About;
