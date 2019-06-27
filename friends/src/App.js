import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import { Friends } from "./components/Friends";
import FriendForm from "./components/FriendForm";

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
        // console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log("Error:", err);
      });
    // console.log(this.state);
  }
  addFriends = friends => {
    this.setState ({
      friends
    })
  }
  render() {
    return (
      <div className="App">
        <h3>Friends:</h3>
        <Friends friends={this.state.friends} />
        <FriendForm addfriend={this.addFriends} />
      </div>
    );
  }
}
