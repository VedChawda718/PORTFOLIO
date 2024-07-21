import React from "react";
import NavBar from "../../components/header/navbar";

const Contact = ({ openHamburger, currentNav, handleNavChange }) => {
  return (
    <>
      {openHamburger ? (
        <NavBar
          openHamburger={openHamburger}
          currentNav={currentNav}
          handleNavChange={handleNavChange}
        />
      ) : (
        <div>Contact</div>
      )}
    </>
  );
};

export default Contact;
