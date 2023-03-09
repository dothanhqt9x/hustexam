import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'

var time = 0
function CountdownTimer(props) {
  const [timeLeft, setTimeLeft] = useState(props.seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  time = 3600 - timeLeft

  return (
    <div className="countdown-timer">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default CountdownTimer;

export {time}