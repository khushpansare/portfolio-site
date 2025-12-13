import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

function Skills() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 768px)", () => {
      gsap.from("#skill-card-1", {
        x: -500,
        rotate: -25,
        scrollTrigger: {
          trigger: "#skill-card-1",
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      gsap.from("#skill-card-2", {
        x: 500,
        rotate: 25,
        scrollTrigger: {
          trigger: "#skill-card-2",
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });
    });

    // Mobile
    mm.add("(max-width: 767px)", () => {
      gsap.from("#skill-card-1", {
        x: -100, // smaller value
        rotate: -10,
        scrollTrigger: {
          trigger: "#skill-card-1",
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.from("#skill-card-2", {
        x: 100,
        rotate: 10,
        scrollTrigger: {
          trigger: "#skill-card-2",
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

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
