import React, { useState, useEffect } from "react";
import "./styles.css";

const LiveTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  // Get the time in IST (Indian Standard Time)
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const indianTimeString = time.toLocaleTimeString("en-US", options);
  const period = indianTimeString.slice(-2);

  const renderPeriod = () => {
    if (period === "AM") {
      return <span>AM</span>;
    } else if (period === "PM") {
      return <span>PM</span>;
    }
    return null; // Handle edge cases
  };

  return (
    <>
      <div className="timeContainer">
        <span className="time">{indianTimeString.slice(0, -3)}</span>
        <span className="period">{renderPeriod()}</span>
      </div>
    </>
  );
};

export default LiveTime;
