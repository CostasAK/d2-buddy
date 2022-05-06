import "./Background.scss";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Background() {
  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `radial-gradient(ellipse farthest-side at ${Math.round(
          Math.random() * 100
        )}% ${Math.round(
          Math.random() * 50
        )}%, rgba(25,30,41,1) 0%, rgba(4,4,16,1) 100%)`,
      }}
    />
  );
}
