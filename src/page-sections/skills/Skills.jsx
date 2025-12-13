import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

function Skills() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from("#skill-card-1", {
      x: -300,
      // xPercent: -80,
      duration: 2,
      rotate: -25,
      scrollTrigger: {
        trigger: "#skill-card-1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    });
  });

  useGSAP(function () {
    gsap.from("#skill-card-2", {
      x: 300,
      // xPercent: 80,
      duration: 2,
      rotate: -25,
      scrollTrigger: {
        trigger: "#skill-card-2",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="skills">
      <h1>Skills</h1>

      <div className="skills-wrapper">
        <div id="skill-card-1" className="skill-card ">
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

        <div id="skill-card-2" className="skill-card">
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
