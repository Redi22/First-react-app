import React, { Component } from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <ul className="nav-bar-ul">
            <li>
              <a href="g.com">Home</a>
            </li>
            <li>
              <a href="g.com">Profile</a>
            </li>
            <li>
              <a href="g.com">Notification</a>
            </li>
            <li>
              <a href="g.com">Contact</a>
            </li>
            <li>
              <a href="g.com">About</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Hello;
