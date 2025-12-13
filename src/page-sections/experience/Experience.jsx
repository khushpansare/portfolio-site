import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // Array.from()
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience-card",
        // scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
        // duration: 0.2,
      },
    });

    tl.to(".experience-card", {
      scaleX: 0,
      scaleY: 0,
      duration: 0.5,
      ease: "power1.inOut",
      // transformOrigin: "center center",
    });

    tl.to(".experience-card", {
      scaleX: 1,
      scaleY: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.35)",
      // transformOrigin: "center center",
    });
  });
  return (
    <div id="experience">
      <h1>Experience</h1>

      <div className="experience-card">
        <h2> Frontend Developer Intern — FlyCT Softtech </h2>
        <h3>November 2022 - August 2023</h3>
        <ul>
          <li>
            Developed responsive user interfaces using React.js, HTML, CSS/SCSS,
            and JavaScript (ES6+).
          </li>
          <li>
            Converted UI/UX designs into functional web pages with pixel-perfect
            accuracy.
          </li>
          <li>
            Collaborated with the frontend team to build and improve reusable
            components.
          </li>
          <li>Integrated REST APIs and handled data using Axios / Fetch.</li>
          <li>
            Improved website performance by optimizing code and reducing
            re-renders.
          </li>
          <li>Performed bug fixing, error handling, and UI polishing.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
