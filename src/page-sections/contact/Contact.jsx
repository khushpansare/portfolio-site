import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Resume from "./Resume";

function Contact() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".contact-wrapper", {
      y: 200,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top: 55%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="contact">
      <div className="contact-wrapper">
        <h1>Contact ME</h1>

        <h4>
          I'm available for Frontend Developer, MERN Stack, and App Developer
          roles — including full-time, and freelance opportunities. Reach out
          anytime!
        </h4>

        <ul>
          <li>
            <i className="bi bi-telephone"></i> Phone: +91 7350872376
          </li>
          <li>
            <i className="bi bi-envelope"></i> Email:
            khushaldevpansare025@gmail.com
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i> Pune, Maharashtra
          </li>
          <li>
            <a href="https://github.com/khushpansare">
              <i className="bi bi-github"></i> Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/khushpansare/">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>

        <Resume />

        <h3>Thank YOU for your Time</h3>
      </div>
    </div>
  );
}

export default Contact;
