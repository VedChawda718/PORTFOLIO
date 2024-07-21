import React from 'react';
import { ReactTyped } from 'react-typed';

const TypedEffect = ({displayArray}) => {
  const greetings = displayArray;

  return (
    <span className="typed-container">
      <ReactTyped
        strings={greetings}
        typeSpeed={100}
        backSpeed={50}
        backDelay={1500}
        loop
      />
    </span>
  );
};

export default TypedEffect;
