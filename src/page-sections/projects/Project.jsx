import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectsData = [
  {
    p_name: "RAP Analytical",
    p_desc: `Landing page website for We're all values for training center.
              Contributed as a frontend developer to make site optimized. 
              Worked with 2 team members to develop it. 
              Tech: React.js, Material-UI, CSS, PHP for backend.`,
    p_img: "",
    p_link: "https://www.rapanalytical.com",
  },
  {
    p_name: "MCQ Test Paper",
    p_desc: `It's a MCQ test portal created by me from scratch for the competitive exams or MCQ related paper.`,
    p_img: "",
    p_link: null,
  },
  {
    p_name: "Mathematical Abacus App",
    p_desc: `is a digital platform to help students to learn mathematical operations without using any pen, notebook. 
      Tech: React.js, CSS, Bootstrap, PHP for backend.`,
    // p_img: "",
    p_link: null,
  },
  {
    p_name: "Nutri-hub",
    p_desc: `It's Landing page to show about company which sell products related agriculture.`,
    // p_img: "",
    p_link: null,
  },
];

function Project() {
  gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   // Array.from()
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#project-card-1",
  //       // scroller: "body",
  //       // markers: true,
  //       start: "top 80%",
  //       end: "top 50%",
  //       scrub: 2,
  //       // duration: 0.2,
  //     },
  //   });

  //   tl.fromTo(
  //     ".project-card",
  //     {
  //       x: 500,
  //       duration: 0.2,
  //     },
  //     {
  //       x: 0,
  //       duration: 0.2,
  //     }
  //   );
  // });

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".border-anim",
  //     {
  //       strokeDashoffset: 600,
  //     },
  //     {
  //       strokeDashoffset: 0,
  //       duration: 1.2,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".project-card-1",
  //         scroller: "body",
  //         start: "top 80%",
  //         end: "top 40%",
  //         scrub: 2,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div id="projects">
      <h1>Projects</h1>

      <div className="project-wrapper">
        {projectsData.map((val, i) => {
          return (
            <div className="project-card" key={i}>
              <div className="left">
                <h1>{val.p_name}</h1>
                <p>{val.p_desc}</p> <br />
                {val.p_link && <a href={val.p_link}>Check Live Project</a>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
