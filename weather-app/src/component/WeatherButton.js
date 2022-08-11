import React from "react";
import { Button } from "react-bootstrap";

import "./WeatherButton.css";

const WeatherButton = () => {
  return (
    <div>
      <Button id="current-loc" className="button">
        Current Location
      </Button>
      <Button className="button">Paris</Button>
      <Button className="button">New York City</Button>
    </div>
  );
};

export default WeatherButton;
