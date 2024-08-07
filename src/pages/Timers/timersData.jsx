import { useQueries, useQuery } from "@tanstack/react-query"
import {
  altarsOfSorrow_84x84,
  beyondLight_84x84,
  dungeon_256x256,
  exoticMission_150x150,
  ironBanner_256x256,
  lightfall_256x256,
  lostSector_120x120,
  nightfall_84x84,
  raid_110x110,
  terminalOverload_200x200,
  theWitchQueen_200x200,
  trialsOfOsiris_256x256,
  vexIncursion_200x200
} from "assets/bungie"
import Activity, { LostSectorLink } from "components/Activity"
import { expansionRelease, seasonRelease } from "constants/time"

import EuropaEclipsedZoneIcon from "assets/EuropaEclipsedZone.png"
import WellspringIcon from "assets/Wellspring.png"
import Modal from "components/Modal"
import { Weapon } from "components/Weapon"
import { pascalCase } from "functions/pascalCase"

export const timersData = [
  {
    title: "Altars of Sorrow Weapon",
    sheet: "altarsOfSorrowRotation",
    icon: altarsOfSorrow_84x84,
    release: expansionRelease.shadowkeep,
    useDataToItems: (items) =>
      items?.map((item) => {
        item.element = <Weapon hash={item?.hash} name={item?.name} />;
        item.icon = <Weapon hash={item?.hash} variant="icon" />;
        item.to = `/Weapons/${item?.hash}`;
        return item;
      }) || items,
  },
  {
    title: "Featured Dungeon",
    sheet: "dungeonRotation",
    icon: dungeon_256x256,
    release: seasonRelease[19],
  },
  {
    title: "Europa: Eclipsed Zone",
    sheet: "europaEclipsedZoneRotation",
    release: expansionRelease.beyondLight,
    icon: EuropaEclipsedZoneIcon,
  },
  {
    title: "Empire Hunt",
    sheet: "europaEmpireHuntRotation",
    icon: beyondLight_84x84,
    release: expansionRelease.beyondLight,
  },
  {
    title: "Europa: Simulation",
    sheet: "europaSimulationRotation",
    release: expansionRelease.beyondLight,
    // icon: EuropaSimulationIcon,
  },
  {
    title: "Events",
    sheet: "events",
    release: Infinity,
  },
  {
    title: "Exotic Mission",
    sheet: "exoticMissionRotation",
    icon: exoticMission_150x150,
    release: seasonRelease[19],
  },
  {
    title: "Iron Banner",
    sheet: "ironBanner",
    icon: ironBanner_256x256,
    release: Infinity,
  },
  {
    title: "Lightfall Campaign Mission",
    sheet: "lightfallCampaignMissionRotation",
    release: expansionRelease.lightfall,
    icon: lightfall_256x256,
  },
  {
    title: "Legend & Master Lost Sector",
    sheet: "lostSectorRotation",
    icon: lostSector_120x120,
    release: expansionRelease.lightfall,
    useDataToItems: (items) =>
      items?.map((item) => {
        item.id = `${item?.reward}${item?.reward?.length > 0 ? " - " : ""}${
          item?.name
        }`;
        item.element = (
          <>
            <LostSectorLink name={item?.name} />
            {item?.name && item?.reward ? " - " : ""}
            {item?.reward}
          </>
        );
        return item;
      }),
  },
  {
    title: "Neomuna: Partition",
    sheet: "neomunaPartitionRotation",
    release: expansionRelease.lightfall,
    icon: lightfall_256x256,
  },
  {
    title: "Neomuna: Terminal Overload",
    sheet: "neomunaTerminalOverloadRotation",
    release: expansionRelease.lightfall,
    icon: terminalOverload_200x200,
    useDataToItems: (items) =>
      items?.map((item) => {
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
      }),
  },
  {
    title: "Neomuna: Vex Incursion",
    sheet: "neomunaVexIncursionRotation",
    release: expansionRelease.lightfall,
    icon: vexIncursion_200x200,
  },
  {
    title: "Nightfall",
    sheet: "nightfallRotation",
    release: expansionRelease.lightfall,
    icon: nightfall_84x84,
    useDataToItems: (items) => {
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

      return items?.map((item) => {
        item.reward =
          (item?.reward &&
            item?.grandmaster === "TRUE" &&
            (item?.reward?.endsWith(" (Adept)")
              ? item?.reward
              : item?.reward + " (Adept)")) ||
          item?.reward;

        item.element = `${item?.reward}${
          item?.reward?.length > 0 ? " - " : ""
        }${item?.name}`;

        if (
          milestone.isSuccess &&
          nightfalls.every((nightfall) => nightfall?.isSuccess)
        ) {
          if (
            item?.name === nightfalls[0]?.data?.displayProperties?.description
          ) {
            item.element = (
              <Modal triggerContent={item?.element} maxWidth={false} width="xl">
                <Activity dataArray={nightfalls} />
              </Modal>
            );
          }
        }

        return item;
      });
    },
  },
  {
    title: "Featured Raid",
    sheet: "raidRotation",
    release: seasonRelease[20],
    icon: raid_110x110,
  },
  {
    title: "Savathûn's Throne World: Altars of Reflection",
    sheet: "savathunsThroneWorldAltarsOfReflectionRotation",
    release: expansionRelease.witchQueen,
    icon: theWitchQueen_200x200,
  },
  {
    title: "The Wellspring",
    sheet: "savathunsThroneWorldWellspringRotation",
    release: expansionRelease.witchQueen,
    icon: WellspringIcon,
    useDataToItems: (items) =>
      items?.map((item) => {
        item.id = item?.weaponHash;
        item.element = (
          <>
            <Weapon hash={item?.weaponHash} name={item?.weapon} /> -{" "}
            {item?.boss}
          </>
        );
        item.icon = <Weapon hash={item?.weaponHash} variant="icon" />;
        item.to = `/Weapons/${item?.weaponHash}`;
        return item;
      }),
  },
  {
    title: "Seasons",
    sheet: "seasons",
    release: Infinity,
    useDataToItems: (items) => {
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

      return items?.map((item) => {
        const thisSeason = seasons
          ?.map((season) => season?.data)
          ?.find(
            (season) =>
              parseInt(season?.seasonNumber) === parseInt(item?.number)
          );

        item.icon = thisSeason?.displayProperties?.icon;
        item.element = `Season ${item?.number}: ${
          item?.name || thisSeason?.displayProperties?.name
        }`;

        item.isLoading =
          d2settings?.isLoading || seasons?.some((x) => x?.isLoading);

        return item;
      });
    },
  },
  {
    title: "Trials of Osiris",
    sheet: "trialsOfOsiris",
    release: seasonRelease[22],
    icon: trialsOfOsiris_256x256,
    useDataToItems: (items) =>
      items?.map((item) => {
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
      }),
  },
  {
    title: "Witch Queen Campaign Mission",
    sheet: "witchQueenCampaignMissionRotation",
    release: expansionRelease.witchQueen,
    icon: theWitchQueen_200x200,
  },
].map((timer) => {
  timer.to ||= pascalCase(timer?.title);

  if (!timer?.useDataToItems) timer.useDataToItems = (items) => items;

  return timer;
});
