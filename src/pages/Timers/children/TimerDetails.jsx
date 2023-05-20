import { Else, If, Then } from "react-if";

import Loading from "components/Loading";
import { SideDialogContent } from "components/SideDialog/SideDialogContent";
import { TimerList } from "components/TimerList";
import { timersData } from "pages/Timers/timersData";
import { useParams } from "react-router-dom";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export const TimerDetails = () => {
  const { to } = useParams();

  const timer = timersData.find((timer) => timer.to === to);

  if (!timer)
    throw new Response("", { status: 404, statusText: "Timer Not Found" });

  const { data, isLoading } = useQueryDatabase(timer?.sheet);

  return (
    <SideDialogContent title={timer.title} background={timer.icon}>
      <If condition={isLoading}>
        <Then>
          <Loading size="page" />
        </Then>
        <Else>
          <TimerList
            items={data?.map(timer.useDataToItems)}
            rotation={timer.rotation}
          />
        </Else>
      </If>
    </SideDialogContent>
  );
};
