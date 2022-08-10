import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.value = props.value;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", this.state);
  }

  render() {
    return <p>{this.value}</p>;
  }
}
