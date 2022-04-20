import "./style.scss";

import Card from "../Card/index";
import { Component } from "react";
import SVG from "react-inlinesvg";
import logo from "../../assets/clovis_ck.svg";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">
          <SVG
            src={logo}
            className="logo"
            preProcessor={(code) =>
              code.replace(/stroke="#f1f1f1"/g, 'stroke="currentColor"')
            }
          />
          <span>Destiny 2 Buddy</span>
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
