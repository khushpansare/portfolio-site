import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Project() {
  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(function () {
  //   gsap.from(".project-card", {
  //     height: "0",
  //     scrollTrigger: {
  //       trigger: ".project-wrapper",
  //       // scroller: "body",
  //       markers: true,
  //       start: "top 100%",
  //       end: "top 0%",
  //       scrub: true,
  //     },
  //   });
  // });

  return (
    <div id="projects">
      <h1>Projects</h1>

      <div className="project-wrapper">
        <div className="project-card">
          <div className="left">
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              consequuntur molestiae impedit itaque ipsam dolores ullam quidem
              error voluptates. Accusantium magnam veniam explicabo autem
              consectetur enim voluptatibus eos nam iusto. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam harum possimus pariatur,
              beatae repellendus obcaecati.
            </p>
          </div>
          <div className="right">
            <h1>Project IMG</h1>
          </div>
        </div>

        <div className="project-card">
          <div className="left">
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              consequuntur molestiae impedit itaque ipsam dolores ullam quidem
              error voluptates. Accusantium magnam veniam explicabo autem
              consectetur enim voluptatibus eos nam iusto. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam harum possimus pariatur,
              beatae repellendus obcaecati.
            </p>
          </div>
          <div className="right">
            <h1>Project IMG</h1>
          </div>
        </div>

        <div className="project-card">
          <div className="left">
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              consequuntur molestiae impedit itaque ipsam dolores ullam quidem
              error voluptates. Accusantium magnam veniam explicabo autem
              consectetur enim voluptatibus eos nam iusto. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam harum possimus pariatur,
              beatae repellendus obcaecati.
            </p>
          </div>
          <div className="right">
            <h1>Project IMG</h1>
          </div>
        </div>

        <div className="project-card">
          <div className="left">
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              consequuntur molestiae impedit itaque ipsam dolores ullam quidem
              error voluptates. Accusantium magnam veniam explicabo autem
              consectetur enim voluptatibus eos nam iusto. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam harum possimus pariatur,
              beatae repellendus obcaecati.
            </p>
          </div>
          <div className="right">
            <h1>Project IMG</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
