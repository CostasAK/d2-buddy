import parse from "html-react-parser";
import React from "react";
import Countdown from "react-countdown";
import { IconContext } from "react-icons";
import {
  GiClockwiseRotation,
  GiStarFlag,
  GiUpgrade,
  GiVerticalBanner,
  GiWrench,
} from "react-icons/gi";
import { formatDate, formatTime } from "../../functions/formatDateTime";
import { isPast } from "../../functions/isPast";
import { nextTime } from "../../functions/nextTime";
import { toNaturalLanguageTime } from "../../functions/toNaturalLanguageTime";
import { toTime } from "../../functions/toTime";
import "./style.scss";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365.25 * day;

const icons = {
  maintenance: <GiWrench />,
  event: <GiStarFlag />,
  reset: <GiClockwiseRotation />,
  update: <GiUpgrade />,
  season: <GiVerticalBanner />,
};

export class TimerCard extends React.Component {
  constructor(props) {
    super(props);

    let start = nextTime(this.props.period, toTime(this.props.start));
    let end = nextTime(this.props.period, toTime(this.props.end));

    while (this.props.period && end && start > end) {
      start -= this.props.period;
    }

    this.state = {
      start: start,
      end: end,
      collapsed: true,
    };

    this.onCompleteCountdown = this.onCompleteCountdown.bind(this);
  }

  onCompleteCountdown() {
    if (this.props.period) {
      let start = nextTime(this.props.period, toTime(this.state.start));
      let end = nextTime(this.props.period, toTime(this.state.end));

      while (this.props.period && end && start >= end) {
        start -= this.props.period;
      }

      this.setState({
        start: start,
        end: end,
      });
    }
  }

  render() {
    let start = this.state.start;
    let end = this.state.end;
    let is_recurring = !!this.props.period;

    let ended = false;
    if (
      isPast(end) ||
      (!end && isPast(start + day) && this.props.type !== "season")
    ) {
      ended = true;
    }
    if (ended) {
      return null;
    }

    let started = false;
    if (isPast(start)) {
      started = true;
    }

    if (!is_recurring && (isPast(end) || (!end && isPast(start + day)))) {
      this.setState({ ended: true });
      return null;
    }

    let target_time = start;
    if (started && end) {
      target_time = end;
    }

    let countdown = (
      <span>
        {!end ? "In " : started ? "Ends in " : "Starts in "}
        <Countdown
          date={target_time}
          key={[this.props.name, this.props.period, target_time].join(",")}
          overtime={true}
          renderer={(props) => toNaturalLanguageTime(props.total)}
          onComplete={() => this.onCompleteCountdown()}
        />
        ,{" "}
      </span>
    );

    let absolute_time_string;
    if (started && !end) {
      absolute_time_string =
        "On " + formatDate(target_time, this.props.hasTime);
    } else if (isPast(target_time - day)) {
      absolute_time_string =
        "at " + formatTime(target_time, this.props.hasTime);
    } else {
      absolute_time_string =
        "on " + formatDate(target_time, this.props.hasTime);
    }

    let description =
      typeof this.props.description === "string" ||
      this.props.description instanceof String
        ? parse(this.props.description)
        : this.props.description;

    let flex_order = target_time / minute;
    if (!is_recurring) {
      flex_order -= (10 * year) / minute;
    }

    return (
      <div
        className={
          "TimerCard" +
          (started ? " ongoing" : "") +
          (this.state.collapsed ? " collapsed" : "") +
          " " +
          this.props.type
        }
        style={{ order: flex_order }}
        onClick={() => this.setState({ collapsed: !this.state.collapsed })}
      >
        <div className="content">
          <IconContext.Provider value={{ size: "1.25em" }}>
            <h2>
              {icons[this.props.type]} {this.props.name}
            </h2>
          </IconContext.Provider>
          <p>
            {is_recurring || !(started && !end) ? countdown : ""}
            {absolute_time_string}
          </p>
          <div
            className={
              "description" +
              (this.state.collapsed || !this.props.description
                ? " collapsed"
                : "")
            }
          >
            {description}
          </div>
        </div>
      </div>
    );
  }
}

TimerCard.defaultProps = {
  end: false,
  period: false,
  hasTime: true,
  description: false,
};
