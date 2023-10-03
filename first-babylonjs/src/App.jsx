import { useState } from "react";
import "./App.css";
import MostFirst from "./examples/MostFirst";
import BabylonReactEx from "./examples/BabylonReactEx";
import ClickEvent from "./examples/ClickEvent";
import BasicScene from "./examples/BasicScene";

function App() {
  return (
    <>
      <h1>바빌론 라이브러리 사용 예제</h1>
      {/* <MostFirst /> */}
      {/* <BabylonReactEx /> */}
      {/* <ClickEvent /> */}
      <BasicScene />
    </>
  );
}

export default App;
