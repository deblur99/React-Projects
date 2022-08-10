import "./App.css";

import { useState, useEffect } from "react";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase = () => {
    counter += 1;
    setCounter2(counter2 + 1);
    console.log("counter는", counter, "");
  };

  // useEffect
  // 1. 두 번째 인자에 아무것도 없을 때는 componentDidMount()처럼 작동한다.
  // 2. 배열 안에 state (아무 값 X) 값이 있으면 componentDidMount() + componentDidUpdate()처럼 작동한다.
  useEffect(() => {
    console.log("useEffect1 called");
  }, []);

  useEffect(() => {
    console.log("useEffect2 called", counter2);
  }, [counter2, value]);

  useEffect(() => {
    console.log("useEffect3 called", value);
  }, [value]);

  return <div>{console.log("render")}</div>;
}

export default App;
