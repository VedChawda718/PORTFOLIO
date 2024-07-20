import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./styles.css"

const GsapMagnetic = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    const magneticElement = magnetic.current;

    if (magneticElement) {
      const xTo = gsap.quickTo(magneticElement, "x", { duration: 5, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(magneticElement, "y", { duration: 5, ease: "elastic.out(1, 0.3)" });

      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = magneticElement.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      };

      const onMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      magneticElement.addEventListener("mousemove", onMouseMove);
      magneticElement.addEventListener("mouseleave", onMouseLeave);

      return () => {
        magneticElement.removeEventListener("mousemove", onMouseMove);
        magneticElement.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return (
    <div  className="gsapContainer" ref={magnetic}>
      {children}
    </div>
  );
};

export default GsapMagnetic;
