import React from "react";

import "./Selection.css";

import scissor from "../res/scissor.png";
import rock from "../res/rock.png";
import paper from "../res/paper.png";
import makeDecision from "../utils/makeDecision";

const Selection = () => {
  const onClickSelectBtn = () => {
    console.log("clicked!!");
  };
  return (
    <div id="selection">
      <img
        id="scissor"
        className="select_item"
        src={scissor}
        alt="scissor"
        onClick={onClickSelectBtn}
      ></img>
      <img
        id="rock"
        className="select_item"
        src={rock}
        alt="rock"
        onClick={onClickSelectBtn}
      ></img>
      <img
        id="paper"
        className="select_item"
        src={paper}
        alt="paper"
        onClick={onClickSelectBtn}
      ></img>
    </div>
  );
};

export default Selection;
