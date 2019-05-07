
import React, { Component } from "react";
import "./style.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleUpdate(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div className="input">
        <input type="text" onInput={(e) => this.handleUpdate(e)}/>
        <button onClick={() => this.props.onClick(this.state.value)}>Add Reminder</button>
      </div>
    );
  }
}

export default Input;
