
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Container from "./components/container";
import "./App.css";

class App extends Component{
  render(){
    return(
      <Container/>
    );
  }
}

export default hot(module)(App);
