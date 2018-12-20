import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>React Cognito Auth App</h1>
          <p>A simple React.js app using AWS Cognito for authentication</p>
        </div>
      </div>
    );
  }
}