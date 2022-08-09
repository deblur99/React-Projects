import React from "react";
import "./Player.css";

// indicator by WIN/LOSE
const winBorder = {
  border: "2px solid green",
};

const loseBorder = {
  border: "2px solid orangered",
};

const tieBorder = {
  border: "2px solid skyblue",
};

const youWin = {
  you: { msg: "WINNER", border: winBorder },
  computer: { msg: "LOSER", border: loseBorder },
};

const computerWin = {
  you: { msg: "LOSER", border: loseBorder },
  computer: { msg: "WINNER", border: winBorder },
};

const tie = {
  you: { msg: "TIE", border: tieBorder },
  computer: { msg: "TIE", border: tieBorder },
};

// 밖에서 호출한 setState 함수를 안에서 또 호출하지 마라. -> stack overflow 오류 발생
const Player = (props) => {
  let result = tie;

  // judge WIN/LOSE
  const judgeGame = () => {
    if (props.decision.you === null && props.decision.computer === null) return;

    const you = props.decision.you.name;
    const computer = props.decision.computer.name;

    const judgement =
      you === computer
        ? tie
        : you === "scissors" && computer === "paper"
        ? youWin
        : you === "scissors" && computer === "rock"
        ? computerWin
        : you === "rock" && computer === "scissors"
        ? youWin
        : you === "rock" && computer === "paper"
        ? computerWin
        : you === "paper" && computer === "scissors"
        ? computerWin
        : you === "paper" && computerWin === "rock"
        ? youWin
        : youWin;

    return judgement;
  };

  if (props.decision.you !== null && props.decision.computer !== null) {
    result = judgeGame();
  }

  return (
    <div className="player" style={result[props.type].border}>
      <span id="player_name">{props.type}</span>
      <img
        src={
          props.decision.you && props.decision.computer
            ? props.decision[props.type].src
            : ""
        }
        alt="position"
      ></img>
      <span id="status">{result[props.type].msg}</span>
    </div>
  );
};

export default Player;
