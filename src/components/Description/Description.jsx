import StringVariable from "components/StringVariable";
import { Typography } from "@mui/material";
import reactStringReplace from "react-string-replace";

export const Description = ({ children }) => {
  return (
    <Typography variant="body1">
      {reactStringReplace(children, /\{var:(\d+?)\}/gi, (match, i) => (
        <StringVariable key={match + i} variable={match} />
      ))}
    </Typography>
  );
};
