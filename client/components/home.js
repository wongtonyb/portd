import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    console.log("hit");
  }
  render() {
    return (
      <div className="comp" id="home">
        <div id="home-border-1" />
        <div id="entry">I am a </div>
        <div id="hero">FULLSTACK ENGINEER</div>
        <div id="sidekick">
          who enjoys blending creativity into design and problem solving
        </div>
        <div id="home-border-2" />
      </div>
    );
  }
}

export default Home;
