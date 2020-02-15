import React, { Component } from "react";

class Technologies extends Component {
  render() {
    return (
      <div id="technologies">
        <h2>Technologies I've worked with</h2>
        <div id="both-tech-container">
          <div id="left-tech-container">
            <div className="tech-container">
              <div className="tech-title">FRONTEND</div>
              <div className="tech-icon-container">
                <div className="tooltip">
                  <img
                    src="./assets/js.png"
                    alt="JavaScript"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">JavaScript</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/html5.png"
                    alt="HTML"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">HTML</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/css3.png"
                    alt="CSS"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">CSS</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/react.png"
                    alt="React / React Native"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">React / React</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/redux.png"
                    alt="Redux"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Redux</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/viro.png"
                    alt="Viro"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Viro</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/expo.png"
                    alt="Expo"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Expo</span>
                </div>
              </div>
            </div>
            <div className="tech-container">
              <div className="tech-title">BACKEND</div>
              <div className="tech-icon-container">
                <div className="tooltip">
                  <img
                    src="./assets/nodejs.png"
                    alt="NodeJS"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">NodeJS</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/apollo.png"
                    alt="Apollo"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Apollo</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/express.png"
                    alt="Express"
                    id="express-icon"
                  />
                  <span className="tooltiptext">Express</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/graphql.png"
                    alt="GraphQL"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">GraphQL</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/sequelize.png"
                    alt="Sequelize"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Sequelize</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/postgres.png"
                    alt="PostgreSQL"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">PostgreSQL</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/prisma.png"
                    alt="Prisma"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Prisma</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/aurora.png"
                    alt="Amazon Aurora (RDS)"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Amazon Aurora (RDS)</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/oauth.png"
                    alt="OAuth"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">OAuth</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/passportjs.png"
                    alt="Passport.js"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Passport</span>
                </div>
              </div>
            </div>
          </div>
          <div id="right-tech-container">
            <div className="tech-container">
              <div className="tech-title">DEVOPS</div>
              <div className="tech-icon-container">
                <div className="tooltip">
                  <img src="./assets/git.png" alt="Git" className="tech-icon" />
                  <span className="tooltiptext">Git</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/github.png"
                    alt="Github"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Github</span>
                </div>
                <div className="tooltip">
                  <img src="./assets/npm.png" alt="npm" className="tech-icon" />
                  <span className="tooltiptext">npm</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/webpack.png"
                    alt="Webpack"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Webpack</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/heroku.png"
                    alt="Heroku"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Heroku</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/travis.png"
                    alt="Travis CI"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Travis CI</span>
                </div>
              </div>
            </div>
            <div className="tech-container">
              <div className="tech-title">TOOLS</div>
              <div className="tech-icon-container">
                <div className="tooltip">
                  <img
                    src="./assets/vscode.png"
                    alt="VSCode"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">VSCode</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/postico.png"
                    alt="Postico"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Postico</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/postman.png"
                    alt="Postman"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Postman</span>
                </div>
              </div>
            </div>
            <div className="tech-container">
              <div className="tech-title">TESTING</div>
              <div className="tech-icon-container">
                <div className="tooltip">
                  <img
                    src="./assets/mocha.png"
                    alt="Mocha"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Mocha</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/chai.png"
                    alt="Chai"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Chai</span>
                </div>
                <div className="tooltip">
                  <img
                    src="./assets/jasmine.png"
                    alt="Jasmine"
                    className="tech-icon"
                  />
                  <span className="tooltiptext">Jasmine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
