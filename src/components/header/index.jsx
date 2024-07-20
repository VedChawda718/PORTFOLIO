import React from "react";
import "./styles.css";
import useDeviceSize from "../../components/useDeviseSize";

const Header = () => {
  const { isMobile, isTablet } = useDeviceSize();

  return (
    <div className="headerContainer">
      <span className="copy-rightText">वेद</span>
      {isMobile || isTablet ? (
        <></>
      ) : (
        <span className="navItems">
          <span className="navItem">Home</span>
          <span className="navItem">About</span>
          <span className="navItem">Contact</span>
        </span>
      )}
    </div>
  );
};

export default Header;
