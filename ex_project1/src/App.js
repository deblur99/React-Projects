import React, { useState } from "react";

import "./App.css";

import scissors from "./res/Scissors-PNG-Pic.png";
import rock from "./res/very simple rock_0.png";
import paper from "./res/paper_111691001.jpg";

import Player from "./layout/Player";
import Selection from "./layout/Selection";

import makeDecision from "./utils/makeDecision";

const decision_list = {
  scissors: {
    name: "scissors",
    src: scissors,
  },
  rock: {
    name: "rock",
    src: rock,
  },
  paper: {
    name: "paper",
    src: paper,
  },
};

function App() {
  const [playerSelect, setPlayerSelect] = useState({
    you: null,
    computer: null,
  });

  const onClickSelectBtn = (pick) => {
    const computerPick = makeDecision();
    const playerPicks = {
      you: decision_list[pick],
      computer: decision_list[computerPick],
    };
    setPlayerSelect(playerPicks);

    console.log(playerPicks);
  };

  return (
    <div id="container">
      <article>
        <Player className="player" type="you" decision={playerSelect}></Player>
        <Player
          className="player"
          type="computer"
          decision={playerSelect}
        ></Player>
      </article>
      <footer>
        <div id="selections">
          <div onClick={() => onClickSelectBtn("scissors")}>
            <Selection name="scissors"></Selection>
          </div>
          <div onClick={() => onClickSelectBtn("rock")}>
            <Selection name="rock"></Selection>
          </div>
          <div onClick={() => onClickSelectBtn("paper")}>
            <Selection name="paper"></Selection>
          </div>
        </div>
        <div id="result">WINNER</div>
      </footer>
    </div>
  );
}

export default App;
