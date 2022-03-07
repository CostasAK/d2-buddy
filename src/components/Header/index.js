import { Component } from "react";
import { GiClockwork } from "react-icons/gi";
import "./style.scss";

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="title">
          <GiClockwork className="logo" /> <span>Destiny 2 Buddy</span>
        </h1>
      </header>
    );
  }
}
