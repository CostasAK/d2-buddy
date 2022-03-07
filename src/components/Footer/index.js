import { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import { ReactSVG } from "react-svg";
import avatar from "../../assets/initialen.svg";
import { formatTime } from "../../functions/formatDateTime";
import "./style.scss";

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
