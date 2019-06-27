import React, { Component } from "react";
import axios from "axios";

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  submitHandler = evt => {
    evt.preventDefault();
    const { name, age, email } = this.state;
    const payload = { name, age, email };
    axios
      .post(" http://localhost:5000/friends", payload)
      .then(res => {
        // console.log(res);
        this.props.addfriend(res.data);
        this.props.history.push("http://localhost:5000");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { name, age, email } = this.state;
    return (
      <div className="textInput-container">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            value={name}
            onChange={this.handleChange}
          />

          <input
            type="age"
            name="age"
            placeholder="Age..."
            value={age}
            onChange={this.handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={this.handleChange}
          />
          <button className="form-btn" type="submit">
            Add friend
          </button>
        </form>
      </div>
    );
  }
}
