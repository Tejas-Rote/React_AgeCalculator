// import React from 'react'
import { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birthdateObj = new Date(birthdate);
    const today = new Date();
    const ageDiff = today - birthdateObj;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  return (
    <div className="age">
      <div className="age-content">
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>

        <input
          type="date"
          className="dob"
          value={birthdate}
          onChange={handleInputChange}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        {age !== "" && <p className="text">You are {age} years old</p>}
      </div>
    </div>
  );
};

export default Counter;
