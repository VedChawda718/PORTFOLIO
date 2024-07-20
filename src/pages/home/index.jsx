import React from "react";
import Header from "../../components/header";
import TypedEffect from "../../components/typedEffect/index";
import "./styles.css";
import ResumeButton from "../../assets/resumeButton.png"
import GsapMagnetic from "../../components/gsap/gsapMagnetic/index";

const Home = () => {
  return (
    <>
      <Header />
      <RenderBody />
    </>
  );
};

export default Home;

const RenderBody = () => {
  const helloArray = [
    "नमस्ते",
    "Hi",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "こんにちは",
    "你好",
  ];
  return (
    <>
      <div className="bodyContainer">
        <div className="helloContainer">
          <TypedEffect displayArray={helloArray} />
        </div>
        <div className="aboutContainer">
          I'm <b>Ved Chawda</b>
        </div>
        <div className="aboutContainer">
          Designer, Developer, Artist & Prototyper
        </div>
        <div className="quoteContainer">
          BLENDING CREATIVITY & FUNCTIONALITY
        </div>
        <GsapMagnetic>
        <img src={ResumeButton} alt="resume-button" className="resumeButton"/>
        </GsapMagnetic>
      </div>
    </>
  );
};
