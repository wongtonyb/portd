import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    console.log("hit");
  }
  render() {
    return (
      <div className="body" id="home">
        <p>TONY WONg</p>
      </div>
    );
  }
}

export default Home;
