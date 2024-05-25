import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({ targetDate, resetTimer }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft(targetDate);
      if (remainingTime.total <= 0) {
        clearInterval(timer);
        playSound();
      }
      setTimeLeft(remainingTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <div className="countdown-timer">
        <div className="time-box">
          <div className="timerDiv">
            <div className="colorText">{timeLeft.days} </div>
            <div className="colorText"> Days</div>
          </div>
        </div>
        <div className="time-box">
          <div className="timerDiv">
            <div className="colorText">{timeLeft.hours} </div>
            <div className="colorText"> Hours</div>
          </div>
        </div>
        <div className="time-box">
          <div className="timerDiv">
            <div className="colorText">{timeLeft.minutes} </div>
            <div className="colorText"> Minutes</div>
          </div>
        </div>
        <div className="time-box">
          <div className="timerDiv">
            <div className="colorText">{timeLeft.seconds} </div>
            <div className="colorText"> Seconds</div>
          </div>
        </div>
      </div>
      <button onClick={resetTimer} className="stop-button">
        Stop Timer
      </button>
    </div>
  );
};

const calculateTimeLeft = (targetDate) => {
  const difference = targetDate - new Date();
  let timeLeft = {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
  return timeLeft;
};

const playSound = () => {
  const audio = new Audio("/path/to/sound.mp3");
  audio.play();
};

export default CountdownTimer;
