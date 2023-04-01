import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const randomCenter = () => {
  return {
    x: -Math.round((Math.random() * 100) / 1.5),
    y: Math.round((Math.random() * 50) / 1.5),
  };
};

export const Background = ({ sx = [] }) => {
  const [center, setCenter] = useState(randomCenter());
  const [lastLocation, setLastLocation] = useState("");

  const { pathname: location } = useLocation();

  useEffect(() => {
    if (location !== lastLocation) {
      setCenter(randomCenter());
      setLastLocation(location);
    }
  }, [lastLocation, location]);

  return (
    <Box
      sx={[
        {
          position: "fixed",
          top: "-50%",
          width: "200vw",
          height: "min(150%, 150vh)",
          backgroundAttachment: "fixed",
          zIndex: -1,
          transform: `translate3d(${center.x}%, ${center.y}%, 0)`,
          transition: "transform 1s",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      style={{
        backgroundImage: `radial-gradient(circle farthest-side at 50% 33%, rgba(25,30,41,1) 0%, rgba(4,4,16,1) 100%)`,
        height: "min(150%, calc(1.5 * var(--vh)))",
      }}
    />
  );
};
