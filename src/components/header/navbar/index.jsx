import React from 'react'
import './styles.css'
import {Link} from "react-router-dom";

const NavBar = ({currentNav, handleNavChange, openHamburger}) => {
    console.log("opkjbh", openHamburger);
    console.log("work", currentNav);
  return (
    <span className={`navItems ${openHamburger ? "menu" : ""}`}>
          <Link className={`navItem ${currentNav === "Work" ? "open" : ""} ${openHamburger ? "menu" : ""}`} to="/"><span onClick={() => {handleNavChange("Work")}}>Work</span></Link>
          <Link className={`navItem ${currentNav === "About" ? "open" : ""} ${openHamburger ? "menu" : ""}`} to="/about"><span onClick={() => {handleNavChange("About")}}>About</span></Link>
          <Link className={`navItem ${currentNav === "Contact" ? "open" : ""} ${openHamburger ? "menu" : ""}`}to="/contact"><span onClick={() => {handleNavChange("Contact")}}>Contact</span></Link>
        </span>
  )
}

export default NavBar;