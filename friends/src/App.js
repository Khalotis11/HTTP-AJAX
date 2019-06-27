import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import { Friends } from "./components/Friends";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log("Error:", err);
      });
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <h3>Friends:</h3>
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}
