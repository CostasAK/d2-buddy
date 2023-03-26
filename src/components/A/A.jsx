import { Link } from "@mui/material";
import { forwardRef } from "react";

export const A = forwardRef(({ children, ...props }, ref) => (
  <Link ref={ref} target="_blank" rel="noreferrer" {...props}>
    {children}
  </Link>
));
