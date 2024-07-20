import React from "react";
import "./styles.css";
import GsapMagnetic from "../gsap/gsapMagnetic";

const Button = ({ label }) => {
  return (
    <GsapMagnetic>
    <button className="buttonContainer">
     {label}
    </button>
    </GsapMagnetic>
  );
};

export default Button;
