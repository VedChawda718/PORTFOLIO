import React from "react";
import "./styles.css";
import ResumeButton from "../../assets/resumeButton.png";
import GsapMagnetic from "../../components/gsap/gsapMagnetic/index";
import NavBar from "../../components/header/navbar";

const Home = ({openHamburger, currentNav, handleNavChange}) => {
  return <RenderBody openHamburger={openHamburger} currentNav={currentNav} handleNavChange={handleNavChange}/>;
};

export default Home;

const RenderBody = ({openHamburger, currentNav, handleNavChange}) => {
  return (
  <>
    {openHamburger ? <NavBar  openHamburger={openHamburger}  currentNav={currentNav} handleNavChange={handleNavChange}/> : <>   <span className="bodyContainer">
      <span className="aboutContainer">Hi I'm</span>
      <span className="nameContainer">
        <span>VED CHAWDA</span>
      </span>
      <span className="aboutContainer">
        Designer, Developer, Artist & Prototyper
      </span>
      <GsapMagnetic>
        <img src={ResumeButton} alt="resume-button" className="resumeButton" />
      </GsapMagnetic>
    </span></>}
 
    </>
  );
};
