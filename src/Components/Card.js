import React, { useState } from "react";
import { observer } from "mobx-react";
import AppStore from "../Stores/AppStore";
import {Link} from "react-router-dom"
import './Card.css'

const Card = observer(() => {
  const [selectedOption, setSelectedOption] = useState("C");
  const apiResult = AppStore.apiResult.data;
  console.log(JSON.parse(JSON.stringify(apiResult)));
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="Result">
        <h2>Weather Data</h2>
        <div className="tempToogleContainer">
          <label>
            <input
              type="radio"
              value="C"
              checked={selectedOption === "C"}
              onChange={handleOptionChange}
            />
            Celsius
          </label>
          <label>
            <input
              type="radio"
              value="F"
              checked={selectedOption === "F"}
              onChange={handleOptionChange}
            />
            Fahrenheit
          </label>
        </div>
        <div className="report">
          <p className="cityName">Location: {apiResult.location.name}</p>
          <p className="countryName">Location: {apiResult.location.country}</p>
          <div className="condition">
            <p className="conditionText">
              Conditions: {apiResult.current.condition.text}
            </p>
            <img src={apiResult.current.condition.icon} alt="icon" />
          </div>
          <p className="countryName">
            Temperature :{" "}
            {selectedOption === "C"
              ? apiResult.current.temp_c
              : apiResult.current.temp_f}
            &nbsp;(°{selectedOption})
          </p>
          <p className="windSpeed">
            Wind Speed: {apiResult.current.wind_kph}&nbsp;Kph
          </p>
          <button><Link to="/" >Home</Link></button>
        </div>
      </div>
    </>
  );
});

export default Card;
