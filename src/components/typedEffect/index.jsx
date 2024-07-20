import React from 'react';
import { ReactTyped } from 'react-typed';

const TypedEffect = ({displayArray}) => {
  const greetings = displayArray;

  return (
    <div className="typed-container">
      <ReactTyped
        strings={greetings}
        typeSpeed={100}
        backSpeed={50}
        backDelay={1500}
        loop
      />
    </div>
  );
};

export default TypedEffect;
