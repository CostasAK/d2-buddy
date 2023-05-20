import { Box, Button } from "@mui/material";
import { Else, If, Then } from "react-if";

import Loading from "components/Loading";
import { Outlet } from "react-router-dom";
import Page from "layout/Page";
import { TimerButton } from "components/TimerButton";
import { isPast } from "functions/isPast";
import { links } from "pages/Timers/links";
import { timersData } from "pages/Timers/timersData";
import { useNow } from "hooks/useNow";
import { useQueriesDatabase } from "hooks/useQueriesDatabase";
import { useResets } from "pages/Timers/children/Resets";

export const Timers = () => {
  const now = useNow();

  const { data, isLoading } = useQueriesDatabase(
    timersData?.map((timer) => timer.sheet)
  );

  const actualTimers = timersData
    .map((timer, index) => {
      timer.items = data?.[index]?.map(timer.useDataToItems);
      timer.isLoading = isLoading?.[index] || timer.items?.[0]?.isLoading;
      return timer;
    })
    .filter((timer) => timer?.items?.length > 0)
    .concat(useResets())
    .sort((a, b) => {
      const aTimestamp = isPast(a.items[0].startTimestamp, now)
        ? a.items[0].endTimestamp
        : a.items[0].startTimestamp;
      const bTimestamp = isPast(b.items[0].startTimestamp, now)
        ? b.items[0].endTimestamp
        : b.items[0].startTimestamp;

      return a.isLoading && b.isLoading
        ? 0
        : !a.isLoading && b.isLoading
        ? -1
        : a.isLoading && !b.isLoading
        ? 1
        : a.disabled && b.disabled
        ? 0
        : !a.disabled && b.disabled
        ? -1
        : a.disabled && !b.disabled
        ? 1
        : aTimestamp < bTimestamp
        ? -1
        : aTimestamp > bTimestamp
        ? 1
        : a.release < b.release
        ? 1
        : a.release > b.release
        ? -1
        : a.title.localeCompare(b.title, "en", { ignorePunctuation: true });
    });

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
              <TimerButton
                key={timer.title}
                title={timer.title}
                to={timer.to}
                items={timer.items}
                isLoading={timer.isLoading}
                icon={timer.icon || timer.items[0].icon}
                rotation={timer?.rotation || timer?.sheet?.endsWith("Rotation")}
                disabled={timer.disabled}
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
