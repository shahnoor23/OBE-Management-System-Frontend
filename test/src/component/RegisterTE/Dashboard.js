import React, { Component } from "react";
import Post from "./Post";
import Get from "./Get";
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Post />
        <Get />
      </div>
    );
  }
}

export default Dashboard;
