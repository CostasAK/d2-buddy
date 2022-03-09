import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import {
  GiClockwiseRotation,
  GiStarFlag,
  GiUpgrade,
  GiVerticalBanner,
  GiWrench,
} from "react-icons/gi";
import { capitalizeSentence } from "../../functions/capitalizeSentence";
import { formatDate, formatTime } from "../../functions/formatDateTime";
import { formatDuration } from "../../functions/formatDuration";
import { isPast } from "../../functions/isPast";
import { nextTime } from "../../functions/nextTime";
import { toTime } from "../../functions/toTime";
import Card from "../Card";
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

const TimerCard = (props) => {
  const [end, setEnd] = useState(nextTime(props.period, toTime(props.end)));
  const [start, setStart] = useState(() => {
    let start = nextTime(props.period, toTime(props.start));
    while (props.period && end && start > end) {
      start -= props.period;
    }
    return start;
  });
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnd(nextTime(props.period, toTime(end)));
      setNow(() => Date.now());
      setStart(() => {
        let start_temp = nextTime(props.period, toTime(start));
        while (props.period && end && start_temp >= end) {
          start_temp -= props.period;
        }
        return start_temp;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [now, start, end, props.period]);

  let is_recurring = !!props.period;

  let started = false;
  if (isPast(start)) {
    started = true;
  }

  let ended = false;
  if (
    isPast(end) ||
    (!end && isPast(start + day)) ||
    (!is_recurring && (isPast(end) || (!end && isPast(start + day))))
  ) {
    ended = true;
  }

  if (ended) {
    return null;
  }

  let target_time = start;
  if (started && end) {
    target_time = end;
  }

  let countdown = formatDuration(target_time - now);

  let absolute_time_string;
  if (started && !end) {
    absolute_time_string = "On " + formatDate(target_time, props.hasTime);
  } else if (isPast(target_time - day)) {
    absolute_time_string = "at " + formatTime(target_time, props.hasTime);
  } else {
    absolute_time_string = "on " + formatDate(target_time, props.hasTime);
  }

  let flex_order = target_time / minute;
  if (!is_recurring) {
    flex_order -= (10 * year) / minute;
  }

  let long_description =
    typeof props.description === "string" || props.description instanceof String
      ? parse(props.description)
      : props.description;

  return (
    <Card
      className="TimerCard"
      title={props.name}
      shortDescription={capitalizeSentence(
        (is_recurring || !(started && !end) ? countdown + ", " : "") +
          absolute_time_string
      )}
      longDescription={long_description}
      order={flex_order}
    />
  );
};

TimerCard.defaultProps = {
  end: false,
  period: false,
  hasTime: true,
  description: false,
};

export default TimerCard;
