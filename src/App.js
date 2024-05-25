
import React, { useState, useEffect } from "react";
import DatePicker from "./components/DatePicker/DatePicker";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import "./App.css";

const App = () => {
  const [targetDate, setTargetDate] = useState(() => {
    const savedDate = localStorage.getItem("targetDate");
    return savedDate ? new Date(savedDate) : null;
  });

  useEffect(() => {
    if (targetDate) {
      localStorage.setItem("targetDate", targetDate);
    } else {
      localStorage.removeItem("targetDate");
    }
  }, [targetDate]);

  const resetTimer = () => {
    setTargetDate(null);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {targetDate ? (
        <CountdownTimer targetDate={targetDate} resetTimer={resetTimer} />
      ) : (
        <DatePicker setTargetDate={setTargetDate} />
      )}
    </div>
  );
};

export default App;
