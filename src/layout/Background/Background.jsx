import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const randomCenter = () => {
  return {
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 50),
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
      component={motion.div}
      initial={{
        backgroundImage: `radial-gradient(circle farthest-side at 50% 0%, rgba(25,30,41,1) 0%, rgba(4,4,16,1) 100%)`,
      }}
      animate={{
        backgroundImage: `radial-gradient(circle farthest-side at ${center.x}% ${center.y}%, rgba(25,30,41,1) 0%, rgba(4,4,16,1) 100%)`,
      }}
      transition={{ duration: 1 }}
      sx={[
        {
          position: "fixed",
          top: "0",
          width: "100vw",
          height: "min(100%, 100vh)",
          backgroundAttachment: "fixed",
          zIndex: -1,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      style={{
        height: "min(100%, var(--vh))",
      }}
    />
  );
};
