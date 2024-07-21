import React, { useEffect } from "react";
import "./styles.css";
import useDeviceSize from "../../components/useDeviseSize";
import {useLocation} from "react-router-dom";
import NavBar from "./navbar";

const Header = ({openHamburger, handleHamburgerToggle, currentNav, handleNavChange, setCurrentNav}) => {
  const { isMobile, isTablet } = useDeviceSize();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setCurrentNav("Work");
    else if (path === "/about") setCurrentNav("About");
    else if (path === "/contact") setCurrentNav("Contact");
  }, [location]);

  return (
    <>
     <div className="headerContainer">
      <span className="copy-rightText">वेद</span>
      {isMobile || isTablet ? (
        <div className="hamburgerIcon" onClick={handleHamburgerToggle}>
          <Hamburger openHamburger={openHamburger} />
        </div>
      ) : (
        <NavBar currentNav={currentNav} handleNavChange={handleNavChange}/>
      )}
    </div>
    </>
  );
};
export default Header;

const Hamburger = ({openHamburger}) => {
  return (
    <>
      <div className={`hamburger-top ${openHamburger ? "open" : ""}`}></div>
      <div className={`hamburger ${openHamburger ? "open" : ""}`}></div>
      <div className={`hamburger-bottom ${openHamburger ? "open" : ""}`}></div>
    </>
  );
};




 