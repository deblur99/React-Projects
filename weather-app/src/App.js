import react, { useEffect, useState } from "react";
import "./App.css";
import getWeatherData from "./utils/GetWeatherData";

function App() {
  useEffect(() => {
    console.log(getWeatherData());
  }, []);

  return <div className="App"></div>;
}

export default App;
