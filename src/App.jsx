import React, { useRef } from "react";
import Navbar from "./dashboard/Navbar";
import Component_Wrapper from "./wrapper/Component_Wrapper";
import Main_Page from "./component/Main_Page";

function App() {
  return (
    <>
      <Navbar />
      {/* <Component_Wrapper /> */}
      <Main_Page />
    </>
  );
}

export default App;
