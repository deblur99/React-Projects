import React from "react";

import scissors from "../res/scissors.png";
import rock from "../res/rock.png";
import paper from "../res/paper.png";

const select_list = {
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

const Panel = (props) => {
  return (
    <div>
      <img
        id="scissors"
        className="select_item"
        src={select_list[props.name].src}
        alt="scissors"
      ></img>
    </div>
  );
};

export default Panel;
