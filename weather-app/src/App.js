import react, { useEffect, useState } from "react";
import "./App.css";

import getWeatherData from "./utils/GetWeatherData";

import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const [weatherState, setWeatherState] = useState(null);

  // const weather = getWeatherData();

  // setWeatherState(weather);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weatherState} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
