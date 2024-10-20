import React, { useState, useEffect } from "react";

const CountdownTimer = (props) => {
  const { timmer ,setTimmer,setEnd} = props;
  const [timeLeft, setTimeLeft] = useState(600); // Time left in seconds
  
  useEffect(() => {
    let timer = null;
    if (timmer && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimmer(false);
      setEnd(true);
    }
    return () => clearInterval(timer);
  }, [timmer, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default CountdownTimer;
