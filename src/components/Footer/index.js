import "./style.css";

import { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { ReactSVG } from "react-svg";
import { SiKofi } from "react-icons/si";
import avatar from "../../assets/initialen.svg";
import { eorzeaTime } from "../../functions/eorzeaTime";
import { formatTime } from "../../functions/formatDateTime";

export class Footer extends Component {
  constructor(props) {
    super(props);

    let now = Date.now();

    this.state = {
      eorzeaTime: eorzeaTime(now),
      localTime: formatTime(now),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let now = Date.now();
      this.setState({
        eorzeaTime: eorzeaTime(now),
        localTime: formatTime(now),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer-credits">
          <div>
            <span>Made by</span>  
            <a href="https://github.com/CostasAK">
              <ReactSVG src={avatar} className="avatar" /> <span>CostasAK</span>
            </a>
          </div>
          <div
            style={{
              background: "#204363",
              padding: "calc(var(--margins) / 8) calc(var(--margins) / 2)",
            }}
          >
            <a
              href="https://ko-fi.com/costasak"
              style={{ color: "#F5F5F5", fontWeight: "bold" }}
              target="_blank"
              rel="noreferrer"
            >
              <SiKofi /> <span>Support me</span>
            </a>
          </div>
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
