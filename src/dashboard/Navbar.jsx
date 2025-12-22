import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Nav_Mobile from "./Nav_Mobile";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import _gsap from "gsap/gsap-core";

function Navbar() {
  const mobile_nav_toggle_ref = useRef(null);

  const [mobile_nav_flag, setmobile_nav_flag] = useState(false);

  const open_mobile_nav = () => {
    setmobile_nav_flag(!mobile_nav_flag);
    mobile_nav_toggle_ref.current.classList.remove("mobile-nav-display");

    gsap.set(mobile_nav_toggle_ref.current, { x: "0", width: 0 });
    gsap.to(mobile_nav_toggle_ref.current, {
      width: "70vw",
      duration: 0.6,
      ease: "sine.out",
    });
  };

  const close_mobile_nav = () => {
    setmobile_nav_flag(!mobile_nav_flag);

    // gsap.set(navRef.current, { width: "0" });
    gsap.to(mobile_nav_toggle_ref.current, {
      x: "100%",
      // width: "0",
      duration: 0.6,
      ease: "back.in",
    });

    setTimeout(() => {
      mobile_nav_toggle_ref.current.classList.add("mobile-nav-display");
    }, 600);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    close_mobile_nav();
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      "#navbar",
      {
        y: -100, // start above card
      },
      {
        y: 0, // hit the card
        duration: 0.5,
        ease: "bounce.out",
        // repeat: 2, // total bounces = 3
      }
    );
  });

  return (
    <>
      <header id="navbar">
        <nav>
          <div className="bg-blur"></div>
          <ul className="left-side">
            <img src={Logo} alt="" />
          </ul>

          <ul className="right-side">
            <li onClick={() => scrollToSection("intro")}>
              {/* <a href="#intro"> */}
              Introduction
              {/* </a> */}
            </li>
            <li onClick={() => scrollToSection("skills")}>
              {/* <a href="#skills"> */}
              Skills
              {/* </a> */}
            </li>
            <li onClick={() => scrollToSection("projects")}>
              {/* <a href="#projects"> */}
              Projects
              {/* </a> */}
            </li>
            <li onClick={() => scrollToSection("experience")}>
              {/* <a href="#experience"> */}
              Experience
              {/* </a> */}
            </li>

            <li onClick={() => scrollToSection("contact")}>
              {/* <a href="#contact"> */}
              Contact
              {/* </a> */}
            </li>
          </ul>

          <ul className="ham-burger-menu">
            {mobile_nav_flag ? (
              <button className="icon-btn" onClick={close_mobile_nav}>
                <i className="bi bi-x-lg"></i>
              </button>
            ) : (
              <button className="icon-btn" onClick={open_mobile_nav}>
                <i className="bi bi-list"></i>
              </button>
            )}
          </ul>
        </nav>
      </header>

      <Nav_Mobile
        mobile_nav_toggle_ref={mobile_nav_toggle_ref}
        close_mobile_nav={close_mobile_nav}
        scrollToSection={scrollToSection}
      />
    </>
  );
}

export default Navbar;
