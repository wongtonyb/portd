import React, { Component } from "react";

class Works extends Component {
  render() {
    return (
      <div id="works">
        <div className="title">SOME OF MY WORKS</div>
        <div id="project-list">
          <div className="project-container">
            <img
              src="./assets/works/postar.png"
              alt="postAR"
              className="project-title"
            />
            <p className="project-bio">
              PostAR is a mobile application that allows user to create, share
              and comment on post-it notes in Augmented Reality. With postAR,
              users can pin helpful 3D text to a specific geolocation to guide
              visitors, share real time interactive social messages at a venue,
              or simply create a private to-do list that will never get lost.
              <br />
              <br />
              Technologies:
            </p>
            <div className="tech-stack">
              <img
                src="./assets/stack/node.png"
                style={{ width: "112px", height: "30px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/react-native.png"
                style={{ width: "120px", height: "40px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/viro.png"
                style={{ width: "101px", height: "30px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/apollo.png"
                style={{ width: "100px", height: "30px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/graphql.png"
                style={{ width: "120px", height: "60px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/prisma.png"
                style={{ width: "107px", height: "60px" }}
                className="tech-stack-icons"
              />
            </div>
            <div className="project-buttons">
              <a
                href="https://github.com/fullstack-yogis/postAR"
                className="source-code"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="project-container">
            <img
              src="./assets/works/rainforest.png"
              alt="postAR"
              className="project-title"
            />
            <p className="project-bio">
              Rainforest is a mock e-commerce site that sells a variety of
              books. This site features a persistent cart, toast notifications,
              user and guest checkout, google oauth login, order history, and
              payment via Stripe API. This site is also deployed on Heroku
              utilizing Travis CI for continuous integration.
              <br />
              <br />
              Technologies:
            </p>
            <div className="tech-stack">
              <img
                src="./assets/stack/node.png"
                style={{ width: "112px", height: "30px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/react.png"
                style={{ width: "85px", height: "40px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/redux.png"
                style={{ width: "144px", height: "60px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/sequelize.png"
                style={{ width: "98px", height: "40px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/postgresql.png"
                style={{ width: "120px", height: "50px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/heroku.png"
                style={{ width: "100px", height: "30px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/travis.png"
                style={{ width: "128px", height: "40px" }}
                className="tech-stack-icons"
              />
            </div>
            <br />
            <div className="project-buttons">
              <a
                href="https://github.com/One-Team-One-Dream-OTOD/Grace-Shopper"
                className="source-code"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="project-container">
            <img
              src="./assets/works/smile.png"
              alt="postAR"
              className="project-title"
            />
            <p className="project-bio">
              Smile is a mobile application that uses its built-in cameras to
              track faces, determine facial features and expressions, and apply
              different filters based on the those features. It able to detect
              multiple faces in a setting and calculate a smiling percentage
              base on the person's facial features. This application was built
              during a two-day hack-a-thon using React Native and Expo.
              <br />
              <br />
              Technologies:
            </p>
            <div className="tech-stack">
              <img
                src="./assets/stack/node.png"
                style={{ width: "112px", height: "30px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/react-native.png"
                style={{ width: "120px", height: "40px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/expo.png"
                style={{ width: "106px", height: "30px" }}
                className="tech-stack-icons"
              />
            </div>
            <a
              href="https://github.com/wongtonyb/Stackathon-Facial-Recognition"
              className="source-code"
              style={{ position: "relative", top: "-20px" }}
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
