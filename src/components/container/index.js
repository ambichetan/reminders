
import React, { Component } from "react";
import "./style.css";
import Input from "../input";
import Reminder from "../reminder";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: [],
      done: []
    };
  }
  handleNewReminder(reminder) {
    const newReminders = this.state.reminders.slice();
    newReminders.push(reminder);
    this.setState({
      reminders: newReminders
    });
  }
  render() {
    return (
      <div className="container">
        <Input onClick={(reminder) => this.handleNewReminder(reminder)} />
        {this.state.reminders.map((reminder, index) =>(
          <Reminder key={index} name={reminder} />
        ))}
      </div>
    );
  }
}

export default Container;
