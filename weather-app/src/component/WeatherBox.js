import React from "react";

import "./WeatherBox.css";

// {} 안에 어떤 parameter를 받아 props의 내용을 가져올 수 있다.
const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);

  return (
    <div className="weather-box">
      <div>서울</div>
      <h2>30°C / 110°F</h2>
      <h3>맑은 하늘</h3>
    </div>
  );
};

export default WeatherBox;
