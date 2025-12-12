import React from "react";

function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>

      <div className="skills-wrapper">
        <div className="skill-card">
          <h3>Frontend development</h3>

          <div className="frontend-skills">
            <ul className="left-list">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>React-Native</li>
            </ul>
            <ul className="right-list">
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
            </ul>
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend development</h3>
          <div className="backend-skills">
            <ul>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <ul>
              <li>Express.js</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
