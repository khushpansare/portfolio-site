import React from "react";
import Logo from "../assets/Logo.png";

function Nav_Mobile({
  mobile_nav_toggle_ref,
  close_mobile_nav,
  scrollToSection,
}) {
  const handleLink = (id) => {
    close_mobile_nav();
    scrollToSection(id);
  };

  return (
    <>
      <div
        className="mobile-nav mobile-nav-display"
        ref={mobile_nav_toggle_ref}
      >
        <nav>
          <ul className="left-side">
            <img src={Logo} alt="" />
          </ul>

          <ul className="right-side">
            <li onClick={() => handleLink("intro")}>
              {/* <a href="#intro" onClick={() => handleLink("intro")}> */}
              Introduction
              {/* </a> */}
            </li>
            <li onClick={() => handleLink("skills")}>
              {/* <a href="#skills" onClick={close_mobile_nav}> */}
              Skills
              {/* </a> */}
            </li>
            <li onClick={() => handleLink("projects")}>
              {/* <a href="#projects" onClick={close_mobile_nav}> */}
              Projects
              {/* </a> */}
            </li>
            <li onClick={() => handleLink("experience")}>
              {/* <a href="#experience" onClick={close_mobile_nav}> */}
              Experience
              {/* </a> */}
            </li>

            <li onClick={() => handleLink("contact")}>
              {/* <a href="#contact" onClick={close_mobile_nav}> */}
              Contact
              {/* </a> */}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav_Mobile;
