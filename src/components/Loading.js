import "./Loading.scss";

import Spinner from "react-spinkit";

export default function Loading({ size, className, fadeIn }) {
  switch (size) {
    case "page":
      return (
        <h1
          className={
            "loading page " +
            (className ? className : "") +
            " " +
            (fadeIn === "none" ? "no-fade" : "")
          }
        >
          <Spinner name="cube-grid" color="inherit" fadeIn={fadeIn} />
        </h1>
      );

    case "section":
      return (
        <h2
          className={
            "loading section " +
            (className ? className : "") +
            " " +
            (fadeIn === "none" ? "no-fade" : "")
          }
        >
          <Spinner name="cube-grid" color="inherit" fadeIn={fadeIn} />
        </h2>
      );

    case "inline":
      return <Spinner fadeIn={fadeIn} color="inherit" />;

    default:
      return <Spinner fadeIn={fadeIn} color="inherit" />;
  }
}
