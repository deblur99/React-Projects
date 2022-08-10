import react, { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

import getWeatherData from "./utils/GetWeatherData";

function App() {
  useEffect(() => {
    console.log(getWeatherData());
  }, []);

  return (
    <div>
      <WeatherBox />
      <WeatherButton />
    </div>
  );
}

export default App;
