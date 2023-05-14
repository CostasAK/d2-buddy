import { expansionRelease, seasonRelease } from "constants/time";

import DestinyWeapon from "components/DestinyWeapon";
import { LostSectorLink } from "components/Activity";
import WellspringIcon from "assets/Wellspring.png";
import { pascalCase } from "functions/pascalCase";

export const timers = [
  {
    title: "Crucible: Relentless Rotator",
    sheet: "crucibleRelentlessRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/cc8e6eea2300a1e27832d52e9453a227.png",
    release: expansionRelease[0],
  },
  {
    title: "Crucible: Party Rotator",
    sheet: "cruciblePartyRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/cc8e6eea2300a1e27832d52e9453a227.png",
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
    icon: "https://www.bungie.net/common/destiny2_content/icons/4abbc492b40906127b7e8850c1c14135.png",
    release: expansionRelease.beyondLight,
  },
  {
    title: "Europa: Simulation",
    sheet: "europaSimulationRotation",
    release: expansionRelease.beyondLight,
  },
  {
    title: "Legend & Master Lost Sector",
    sheet: "lostSectorRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png",
    release: expansionRelease.lightfall,
    dataToItems: (item) => {
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
    title: "Altars of Sorrow Weapon",
    sheet: "altarsOfSorrowRotation",
    icon: "https://www.bungie.net/common/destiny2_content/icons/58bf5b93ae8cfefc55852fe664179757.png",
    release: expansionRelease.shadowkeep,
    dataToItems: (item) => {
      item.element = <DestinyWeapon hash={item.hash} name={item.name} />;
      return item;
    },
  },
  {
    title: "Featured Raid",
    sheet: "raidRotation",
    release: seasonRelease[18],
    icon: "https://www.bungie.net/common/destiny2_content/icons/48dda413d9f412ca2b10fd56a35a2665.png",
  },
  {
    title: "Lightfall Campaign Mission",
    sheet: "lightfallCampaignMissionRotation",
    release: expansionRelease.lightfall,
    icon: "https://www.bungie.net/common/destiny2_content/icons/DestinyMilestoneDefinition_67326996f903b5961421421e60ba128c.png",
  },
  {
    title: "Neomuna: Terminal Overload",
    sheet: "terminalOverloadRotation",
    release: expansionRelease.lightfall,
    icon: "https://www.bungie.net/common/destiny2_content/icons/70cbe108aa054523eac9defadfa27a57.png",
    dataToItems: (item) => {
      item.id = item?.location;
      item.element = (
        <>
          <DestinyWeapon hash={item.weaponHash} name={item.weapon} /> -{" "}
          {item?.location}
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
    title: "Neomuna: Vex Incursion",
    sheet: "neomunaVexIncursionRotation",
    release: expansionRelease.lightfall,
  },
  {
    title: "Witch Queen Campaign Mission",
    sheet: "witchQueenCampaignMissionRotation",
    release: expansionRelease.witchQueen,
    icon: "https://www.bungie.net/common/destiny2_content/icons/e17d13013bad7d53c47b0231b9784e1e.png",
  },
  {
    title: "The Wellspring",
    sheet: "wellspringRotation",
    release: expansionRelease.witchQueen,
    icon: WellspringIcon,
    dataToItems: (item) => {
      item.id = item?.weaponHash;
      item.element = (
        <>
          <DestinyWeapon hash={item.weaponHash} name={item.weapon} /> -{" "}
          {item?.boss}
        </>
      );
      return item;
    },
  },
  {
    title: "Savathûn's Throne World: Altars of Reflection",
    sheet: "savathunsThroneWorldAltarsOfReflectionRotation",
    release: expansionRelease.witchQueen,
    icon: "https://www.bungie.net/common/destiny2_content/icons/e17d13013bad7d53c47b0231b9784e1e.png",
  },
].map((timer) => {
  timer.to ||= pascalCase(timer.title);

  if (!timer?.dataToItems) timer.dataToItems = (item) => item;

  return timer;
});