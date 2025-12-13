import React from "react";
import Intro from "../page-sections/introduction/Intro";
import Skills from "../page-sections/skills/Skills";
import Project from "../page-sections/projects/Project";
import Experience from "../page-sections/experience/Experience";
import About from "../page-sections/about/About";
import Contact from "../page-sections/contact/Contact";
import Component_Wrapper from "../wrapper/Component_Wrapper";

function Main_Page() {
  return (
    <>
      <Component_Wrapper>
        <Intro />
        <Skills />
        <Project />
      </Component_Wrapper>
      <Experience />

      <Component_Wrapper>
        <Contact />
      </Component_Wrapper>
    </>
  );
}

export default Main_Page;
