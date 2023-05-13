import { Else, If, Then } from "react-if";

import { CycleCardModal } from "components/CycleCard/CycleCardModal";
import Loading from "components/Loading";
import { SideDialogContent } from "components/SideDialog/SideDialogContent";
import { timers } from "pages/Timers/timers";
import { useParams } from "react-router-dom";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export const TimerDetails = () => {
  const { to } = useParams();

  const timer = timers.find((timer) => timer.to === to);

  if (!timer)
    throw new Response("", { status: 404, statusText: "Timer Not Found" });

  let { data, isLoading } = useQueryDatabase(timer?.sheet);

  return (
    <SideDialogContent title={timer.title} background={timer.icon}>
      <If condition={isLoading}>
        <Then>
          <Loading size="page" />
        </Then>
        <Else>
          <CycleCardModal items={data?.map(timer.dataToItems)} />
        </Else>
      </If>
    </SideDialogContent>
  );
};
