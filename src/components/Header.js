import "./Header.scss";

import Button from "./Button";
import SVG from "react-inlinesvg";
import logo from "../assets/clovis_ck.svg";

function Header() {
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
          <Button href="steam://rungameid/1085660">Play Destiny 2</Button>
        </div>
      )}
    </header>
  );
}

export { Header };
