
import React, { Component } from "react";
import "./style.css";

class Reminder extends Component {
  render() {
    return (
      <span>{this.props.name}</span>
    );
  }
}

export default Reminder;
