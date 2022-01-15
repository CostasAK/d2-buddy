import "./style.css";

import { Component } from "react";
import { GiClockwork } from "react-icons/gi";

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="title">
          <GiClockwork className="logo" /> <span>Destiny 2 Timers</span>
        </h1>

        <p className="description">
          Reset Timers and other Countdowns for Destiny 2, in your local time
          with countdowns.
        </p>
      </header>
    );
  }
}
