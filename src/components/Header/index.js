import "./style.scss";

import Card from "../Card/index";
import { Component } from "react";
import { GiClockwork } from "react-icons/gi";

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="title">
          <GiClockwork className="logo" /> <span>Destiny 2 Buddy</span>
        </h1>
        {navigator.platform.match(/Win\d+/i) && (
          <Card
            link="steam://rungameid/1085660"
            shortDescription="Play Destiny 2"
            className="launch"
          />
        )}
      </header>
    );
  }
}
