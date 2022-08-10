import React, { Component } from "react";

import BoxClass from "./BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log("constructor");
  }

  // 클래스 컴포넌트에서는 한 번에 만들고 한 번에 업데이트
  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    // setState 함수의 실행 결과가 반영되지 않은 값이 출력됨
    console.log("increase function", this.state);
  };

  componentDidMount() {
    // 주로 해주는 작업은 API 호출 ex) 서버에 요청하기
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // setState 함수의 실행 결과가 반영된 값이 출력됨
    // -> 업데이트가 된 값을 활용해야 할 때 적합하다!
    console.log("componentDidUpdate", this.state);
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>clicked!!</button>
        {this.state.counter2 < 3 && <BoxClass value={this.state.counter2} />}
      </div>
    );
  }
}
