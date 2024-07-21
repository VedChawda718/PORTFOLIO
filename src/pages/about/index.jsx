import React from "react";
import NavBar from "../../components/header/navbar";

const About = ({ openHamburger, currentNav, handleNavChange }) => {
  return (
    <>
      {openHamburger ? (
        <NavBar
          openHamburger={openHamburger}
          currentNav={currentNav}
          handleNavChange={handleNavChange}
        />
      ) : (
        <div>About</div>
      )}
    </>
  );
};

export default About;
