import React, { Component } from "react";

class Works extends Component {
  render() {
    return (
      <div id="works">
        <h2>PROJECTS I'VE WORKED ON</h2>
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
            <a
              href="https://github.com/fullstack-yogis/postAR"
              className="source-code"
            >
              Source Code
            </a>
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
              user and guest checkout, google oauth sign-in, order history, and
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
                style={{ width: "80px", height: "80px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/postgresql.png"
                style={{ width: "120px", height: "60px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/oauth.png"
                style={{ width: "107px", height: "60px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/stripe.png"
                style={{ width: "120px", height: "60px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/heroku.png"
                style={{ width: "120px", height: "60px" }}
                className="tech-stack-icons"
              />
              <img
                src="./assets/stack/travis.png"
                style={{ width: "120px", height: "60px" }}
                className="tech-stack-icons"
              />
            </div>
            <a
              href="https://github.com/fullstack-yogis/postAR"
              className="source-code"
            >
              Source Code
            </a>
          </div>
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
            <a
              href="https://github.com/fullstack-yogis/postAR"
              className="source-code"
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
