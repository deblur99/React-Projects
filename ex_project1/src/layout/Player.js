import React, { useState } from "react";
import "./Player.css";
import Paper from "../res/paper_111691001.jpg";
import Rock from "../res/very simple rock_0.png";
import Scissors from "../res/Scissors-PNG-Pic.png";

const Player = (props) => {
  console.log(props.decision);
  const [state, setState] = useState(props.decision);

  let toPrinted = state;
  if (toPrinted === "paper") {
    setState(Paper);
  } else if (toPrinted === "rock") {
    setState(Rock);
  } else if (toPrinted === "scissors") {
    setState(Scissors);
  }

  return (
    <div className="player">
      <span id="player_name">{props.type}</span>
      <img src={state} alt="position"></img>
      <span id="status"></span>
    </div>
  );
};

export default Player;
