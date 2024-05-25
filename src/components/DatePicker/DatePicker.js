import React, { useState } from "react";
import "./DatePicker.css";

const DatePicker = ({ setTargetDate }) => {
  const [date, setDate] = useState("");
 // const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetDate = new Date(`${date}`);
    
    if (targetDate > new Date()) {
      setTargetDate(targetDate);
    } else {
      alert("Please select a future date and time.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="date-picker-form">
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="date-picker-input"
      />
    
      <button type="submit" className="date-picker-button">
        Set Timer
      </button>
    </form>
  );
};

export default DatePicker;
