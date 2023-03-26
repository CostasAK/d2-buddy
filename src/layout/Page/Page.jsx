import { When } from "react-if";

const { Box, Typography } = require("@mui/material");

export const Page = ({ title, description, children }) => {
  return (
    <Box>
      <When condition={!!title || !!description}>
        <Box sx={{ alignSelf: "flex-start", marginBottom: 4 }}>
          <When condition={!!title}>
            <Typography variant="h1">{title}</Typography>
          </When>
          <When condition={!!description}>
            <Typography variant="body1">{description}</Typography>
          </When>
        </Box>
      </When>
      {children}
    </Box>
  );
};
