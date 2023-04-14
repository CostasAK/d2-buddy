import { Else, If, Then } from "react-if";

import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export const StringVariable = ({ variable }) => {
  variable = variable.replace(/\D/g, "");

  const { data, isLoading } = useQuery(["buddyData", "stringVariables"]);

  return (
    <If condition={isLoading}>
      <Then>
        <Skeleton width="2ch" sx={{ display: "inline-block" }} />
      </Then>
      <Else>{data?.[variable] || "??"}</Else>
    </If>
  );
};
