import { Component } from "react";
import { GiClockwork, GiPlayButton } from "react-icons/gi";
import "./style.scss";

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="title">
          <GiClockwork className="logo" /> <span>Destiny 2 Buddy</span>
        </h1>
        {navigator.platform.match(/Win\d+/i) && (
          <a className="launch" href="steam://rungameid/1085660">
            <GiPlayButton className="launchIcon" />
            <span>Launch Destiny 2</span>
          </a>
        )}
      </header>
    );
  }
}
