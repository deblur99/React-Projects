import React from "react";

import "./Board.css";

import Player from "./Player";
import Selection from "./Selection";

import makeDecision from "../utils/makeDecision";

const Board = () => {
  const you_decision = makeDecision();
  const com_decision = makeDecision();
  console.log(you_decision, com_decision); // debug

  return (
    <div id="container">
      <article>
        <Player className="player" type="you" decision={you_decision}></Player>
        <Player
          className="player"
          type="computer"
          decision={com_decision}
        ></Player>
      </article>
      <footer>
        <Selection></Selection>
        <div id="result">WINNER</div>
      </footer>
    </div>
  );
};

export default Board;
