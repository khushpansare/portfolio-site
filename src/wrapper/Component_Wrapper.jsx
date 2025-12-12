import React from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Main_Page from "../component/Main_Page";

function Component_Wrapper(props) {
  gsap.registerPlugin(ScrollSmoother);

  // useGSAP(function () {
  //   ScrollSmoother.create({
  //     wrapper: ".main-page-container",
  //     content: ".main-page-container",
  //     smooth: 1.5,
  //     effects: true,
  //   });
  // });

  return (
    <div className="main-page-container">
      <Main_Page />
    </div>
  );
}

export default Component_Wrapper;
