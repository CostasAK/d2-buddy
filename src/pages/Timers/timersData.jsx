import Activity, { LostSectorLink } from "components/Activity";
import { expansionRelease, seasonRelease } from "constants/time";
import { useQueries, useQuery } from "@tanstack/react-query";

import Modal from "components/Modal";
import { Weapon } from "components/Weapon";
import WellspringIcon from "assets/Wellspring.png";
import { pascalCase } from "functions/pascalCase";

export const timersData = [
  {
    title: "Altars of Sorrow Weapon",
    sheet: "altarsOfSorrowRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/b81eb997ce38aada427b13d23dd3564d.png",
    release: expansionRelease.shadowkeep,
    useDataToItems: (item) => {
      item.element = <Weapon hash={item?.hash} name={item?.name} />;
      item.icon = <Weapon hash={item?.hash} variant="icon" />;
      item.to = `/Weapons/${item?.weaponHash}`;
      return item;
    },
  },
  {
    title: "Crucible: Party Rotator",
    sheet: "cruciblePartyRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/f9dbb041c0414ea4856c7be6d8c29f48.png",
    release: expansionRelease[0],
  },
  {
    title: "Crucible: Relentless Rotator",
    sheet: "crucibleRelentlessRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/f9dbb041c0414ea4856c7be6d8c29f48.png",
    release: expansionRelease[0],
  },
  {
    title: "Defiant Battlegrounds: Legend",
    sheet: "defiantRotation",
    icon: "https://bungie.net/common/destiny2_content/icons/DestinySeasonDefinition_50d80a655bccddfd26e954dbfc3b9746.png",
    release: seasonRelease[20],
  },
  {
    title: "Featured Dungeon",
    sheet: "dungeonRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_f20ebb76bee675ca429e470cec58cc7b.png",
    release: seasonRelease[17],
  },
  {
    title: "Europa: Eclipsed Zone",
    sheet: "europaEclipsedZoneRotation",
    release: expansionRelease.beyondLight,
  },
  {
    title: "Empire Hunt",
    sheet: "europaEmpireHuntRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/7704bec77be6fc4b696d0849679bc815.png",
    release: expansionRelease.beyondLight,
  },
  {
    title: "Europa: Simulation",
    sheet: "europaSimulationRotation",
    release: expansionRelease.beyondLight,
  },
  {
    title: "Events",
    sheet: "events",
    release: Infinity,
  },
  {
    title: "Iron Banner",
    sheet: "ironBanner",
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_fe57052d7cf971f7502daa75a2ca2437.png",
    release: Infinity,
  },
  {
    title: "Lightfall Campaign Mission",
    sheet: "lightfallCampaignMissionRotation",
    release: expansionRelease.lightfall,
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyMilestoneDefinition_67326996f903b5961421421e60ba128c.png",
  },
  {
    title: "Legend & Master Lost Sector",
    sheet: "lostSectorRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png",
    release: expansionRelease.lightfall,
    useDataToItems: (item) => {
      item.id = `${item?.reward}${item?.reward?.length > 0 ? " - " : ""}${
        item?.name
      }`;
      item.element = (
        <>
          <LostSectorLink name={item?.name} /> - {item?.reward}
        </>
      );
      return item;
    },
  },
  {
    title: "Neomuna: Partition",
    sheet: "neomunaPartitionRotation",
    release: expansionRelease.lightfall,
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyMilestoneDefinition_67326996f903b5961421421e60ba128c.png",
  },
  {
    title: "Neomuna: Terminal Overload",
    sheet: "neomunaTerminalOverloadRotation",
    release: expansionRelease.lightfall,
    icon: "https://www.bungie.net/common/destiny2_content/icons/b278b99e3a3eafb51e3957732b40bcf8.png",
    useDataToItems: (item) => {
      item.id = item?.location;
      item.element = (
        <>
          <Weapon hash={item?.weaponHash} name={item?.weapon} /> -{" "}
          {item?.location}
        </>
      );
      item.icon = <Weapon hash={item?.weaponHash} variant="icon" />;
      item.to = `/Weapons/${item?.weaponHash}`;
      return item;
    },
  },
  {
    title: "Neomuna: Vex Incursion",
    sheet: "neomunaVexIncursionRotation",
    release: expansionRelease.lightfall,
    icon: "https://www.bungie.net/common/destiny2_content/icons/0c98c7f6e9662032120ade42a554f996.png",
  },
  {
    title: "Nightfall",
    sheet: "nightfallRotation",
    release: expansionRelease.lightfall,
    icon: "https://www.bungie.net/common/destiny2_content/icons/87271a86b4542822aad73d8f0f56d4cb.png",
    useDataToItems: (item) => {
      item.reward =
        item?.reward &&
        item?.grandmaster === "TRUE" &&
        (item?.reward?.endsWith(" (Adept)")
          ? item?.reward
          : item?.reward + " (Adept)");

      item.element = `${item?.reward}${item?.reward?.length > 0 ? " - " : ""}${
        item?.name
      }`;

      const milestone = useQuery(["Milestones"]);

      const activities =
        milestone?.data?.[1942283261]?.activities?.filter(
          (activity) => activity?.activityHash !== 743628305
        ) || [];

      let nightfalls = useQueries({
        queries: activities?.map((activity) => ({
          queryKey: ["DestinyActivityDefinition", activity.activityHash],
          enabled: !!activity?.activityHash,
        })),
        enabled: !!activities,
      });

      nightfalls?.map((nightfall, index) => {
        if (nightfall?.data?.modifiers) {
          nightfall.data.modifiers = activities[index].modifierHashes.map(
            (hash) => ({
              activityModifierHash: hash,
            })
          );
        }
        return null;
      });

      if (
        milestone.isSuccess &&
        nightfalls.every((nightfall) => nightfall.isSuccess)
      ) {
        if (item?.name === nightfalls[0].data.displayProperties.description) {
          item.element = (
            <Modal triggerContent={item?.element} maxWidth={false} width="xl">
              <Activity dataArray={nightfalls} />
            </Modal>
          );
        }
      }

      return item;
    },
  },
  {
    title: "Featured Raid",
    sheet: "raidRotation",
    release: seasonRelease[18],
    icon: "https://www.bungie.net/common/destiny2_content/icons/bd7a1fc995f87be96698263bc16698e7.png",
  },
  {
    title: "Savathûn's Throne World: Altars of Reflection",
    sheet: "savathunsThroneWorldAltarsOfReflectionRotation",
    release: expansionRelease.witchQueen,
    icon: "https://www.bungie.net/common/destiny2_content/icons/0e888294099a744d0a42bfaa7bf1d216.png",
  },
  {
    title: "The Wellspring",
    sheet: "savathunsThroneWorldWellspringRotation",
    release: expansionRelease.witchQueen,
    icon: WellspringIcon,
    useDataToItems: (item) => {
      item.id = item?.weaponHash;
      item.element = (
        <>
          <Weapon hash={item?.weaponHash} name={item?.weapon} /> - {item?.boss}
        </>
      );
      item.icon = <Weapon hash={item?.weaponHash} variant="icon" />;
      item.to = `/Weapons/${item?.weaponHash}`;
      return item;
    },
  },
  {
    title: "Seasons",
    sheet: "seasons",
    release: Infinity,
    useDataToItems: (item) => {
      const d2settings = useQuery(["Settings"]);

      const upcomingSeasonHashes = [
        d2settings?.data?.destiny2CoreSettings?.currentSeasonHash,
        d2settings?.data?.destiny2CoreSettings?.futureSeasonHashes,
      ].flat();

      const seasons = useQueries({
        queries: upcomingSeasonHashes?.map((hash) => ({
          queryKey: ["DestinySeasonDefinition", hash],
          enabled: !!hash,
        })),
        enabled: !!upcomingSeasonHashes,
      });

      const thisSeason = seasons
        ?.map((season) => season?.data)
        ?.find(
          (season) => parseInt(season?.seasonNumber) === parseInt(item?.number)
        );

      item.icon = thisSeason?.displayProperties?.icon;
      item.element = `Season ${item?.number}: ${
        item?.name || thisSeason?.displayProperties?.name
      }`;

      item.isLoading =
        d2settings?.isLoading || seasons?.some((x) => x?.isLoading);

      return item;
    },
  },
  {
    title: "Trials of Osiris",
    sheet: "trialsOfOsiris",
    release: seasonRelease[19],
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_e35792b49b249ca5dcdb1e7657ca42b6.png",
    useDataToItems: (item) => {
      item.id = item?.weaponHash;

      item.name =
        item?.name &&
        (item?.name?.endsWith(" (Adept)")
          ? item?.name
          : item?.name + " (Adept)");

      item.element = item?.hash ? (
        <Weapon hash={item?.hash} name={item?.name} />
      ) : (
        item?.name || "Reward Unknown..."
      );
      item.icon = item?.hash && <Weapon hash={item?.hash} variant="icon" />;
      item.to = item?.hash && `/Weapons/${item?.hash}`;
      return item;
    },
  },
  {
    title: "Witch Queen Campaign Mission",
    sheet: "witchQueenCampaignMissionRotation",
    release: expansionRelease.witchQueen,
    icon: "https://www.bungie.net/common/destiny2_content/icons/0e888294099a744d0a42bfaa7bf1d216.png",
  },
].map((timer) => {
  timer.to ||= pascalCase(timer?.title);

  if (!timer?.useDataToItems) timer.useDataToItems = (item) => item;

  return timer;
});
