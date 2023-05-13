import { Box, Button } from "@mui/material";
import { Else, If, Then } from "react-if";

import CycleCard from "components/CycleCard";
import Loading from "components/Loading";
import { useQueriesDatabase } from "hooks/useQueriesDatabase";
import Page from "layout/Page";
import { links } from "pages/Timers/links";
import { timers } from "pages/Timers/timers";
import { Outlet } from "react-router-dom";

export const Timers = () => {
  const { data, isLoading } = useQueriesDatabase(
    timers.map((timer) => timer.sheet)
  );

  return (
    <Page title="Timers">
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "stretch",
          justifyContent: "flex-start",
          rowGap: "7px",
          columnGap: "6px",
          "> *": {
            flex: "1 1 auto",
          },
        }}
      >
        <If condition={isLoading?.every((x) => x)}>
          <Then>
            <Loading size="page" />
          </Then>
          <Else>
            {timers.map((timer, index) => (
              <CycleCard
                title={timer.title}
                to={timer.to}
                items={data?.[index]?.map(timer.dataToItems)}
                isLoading={isLoading?.[index]}
                icon={timer.icon}
              />
            ))}
          </Else>
        </If>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "stretch",
          justifyContent: "safe center",
          marginInline: "auto",
          marginTop: 4,
          gap: 2,
        }}
      >
        {links.map((link) => (
          <Button
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            variant="destiny"
          >
            {link.name}
          </Button>
        ))}
      </Box>
      <Outlet />
    </Page>
  );
};
