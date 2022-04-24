import "./style.scss";

import { Card } from "../Card";
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
          <div className="launch">
            <Card
              link="steam://rungameid/1085660"
              cardContent="Play Destiny 2"
            />
          </div>
        )}
      </header>
    );
  }
}
