import "./style.scss";

import { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { KofiButton } from "react-kofi-button";
import { ReactSVG } from "react-svg";
import avatar from "../../assets/initialen.svg";
import { formatTime } from "../../functions/formatDateTime";

export class Footer extends Component {
  constructor(props) {
    super(props);

    let now = Date.now();

    this.state = {
      localTime: formatTime(now),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let now = Date.now();
      this.setState({
        localTime: formatTime(now),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <footer className="Footer">
        <div className="credits">
          <div>
            <span>Made by</span>  
            <a href="https://github.com/CostasAK">
              <ReactSVG src={avatar} className="avatar" /> <span>CostasAK</span>
            </a>
          </div>
          <KofiButton
            username="costasak"
            label="Support me"
            preset="thin"
            backgroundColor="kofiGrey"
          />
          <div>
            <a href="https://github.com/CostasAK/d2-buddy">
              <FaGithub /> <span>Source</span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
