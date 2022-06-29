import "./Footer.scss";

import A from "./A";
import { FaGithub } from "react-icons/fa";
import { KofiButton } from "react-kofi-button";
import SVG from "react-inlinesvg";
import avatar from "../assets/initialen.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="credits">
        <div>
          <span>Made by</span>  
          <A href="https://costas.kokke.eu">
            <SVG src={avatar} className="avatar" /> <span>CostasAK</span>
          </A>
        </div>
        <KofiButton
          username="costasak"
          label="Support me"
          preset="thin"
          backgroundColor="kofiGrey"
        />
        <div>
          <A href="https://github.com/CostasAK/d2-buddy">
            <FaGithub /> <span>Source</span>
          </A>
        </div>
      </div>
    </footer>
  );
}
