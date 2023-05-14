import { Box, Button } from "@mui/material";
import { Else, If, Then } from "react-if";

import CycleCard from "components/CycleCard";
import Loading from "components/Loading";
import { Outlet } from "react-router-dom";
import Page from "layout/Page";
import { links } from "pages/Timers/links";
import { timers } from "pages/Timers/timers";
import { useQueriesDatabase } from "hooks/useQueriesDatabase";

export const Timers = () => {
  const { data, isLoading } = useQueriesDatabase(
    timers.map((timer) => timer.sheet)
  );

  const actualTimers = timers
    .map((timer, index) => {
      timer.items = data?.[index]?.map(timer.dataToItems);
      timer.isLoading = isLoading?.[index];
      return timer;
    })
    .filter((timer) => timer?.items?.length > 0)
    .sort((a, b) =>
      a.isLoading && b.isLoading
        ? 0
        : !a.isLoading && b.isLoading
        ? -1
        : a.isLoading && !b.isLoading
        ? 1
        : a.items[0].endTimestamp < b.items[0].endTimestamp
        ? -1
        : a.items[0].endTimestamp > b.items[0].endTimestamp
        ? 1
        : a.items[0].startTimestamp < b.items[0].startTimestamp
        ? -1
        : a.items[0].startTimestamp > b.items[0].startTimestamp
        ? 1
        : a.release < b.release
        ? 1
        : a.release > b.release
        ? -1
        : a.title.localeCompare(b.title)
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
            {actualTimers.map((timer, index) => (
              <CycleCard
                key={timer.to}
                title={timer.title}
                to={timer.to}
                items={timer.items}
                isLoading={timer.isLoading}
                icon={timer.icon}
                titleRule
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
            variant="bungie"
          >
            {link.name}
          </Button>
        ))}
      </Box>
      <Outlet />
    </Page>
  );
};
