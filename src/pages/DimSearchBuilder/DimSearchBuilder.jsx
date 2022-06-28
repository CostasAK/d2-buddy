import A from "../../components/A";
import { DimSearchBuilderResults } from "./DimSearchBuilderResults";
import { DimSearchBuilderToggles } from "./DimSearchBuilderToggles";
import { StyledDimSearchBuilder } from "./StyledDimSearchBuilder";
import createPersistedState from "use-persisted-state";

const useToggleState = createPersistedState("DimSearchBuilder");

const toggles = [
  {
    display: "",
    options: [
      {
        key: "maxPowerItems",
        display: "Max Power Items",
        filter: "is:maxpower",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "itemsInLoadouts",
        display: "Items in Loadouts",
        filter: "is:inloadout",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "masterworkedItems",
        display: "Masterworked Items",
        filter: "is:masterwork",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "glimmerInfuse",
        display: "Glimmer Infuse",
        filter: "is:infusionfodder",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "classifiedItems",
        display: "Classified Items",
        filter: "name:classified",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "slowSparrows",
        display: "Slow Sparrows",
        filter: "(is:vehicle power:<160)",
        default: 0,
        options: ["Trash"],
      },
      {
        key: "sunsetItems",
        display: "Sunset Weapons/Armor",
        filter: "((is:weapon or is:armor) is:sunset)",
        default: 0,
        options: ["Trash"],
      },
      {
        key: "rareItems",
        display: "Rare Weapons/Armor",
        filter: "((is:weapon or is:armor) is:rare)",
        default: 0,
        options: ["Trash"],
      },
      {
        key: "uncommonItems",
        display: "Uncommon Weapons/Armor",
        filter: "((is:weapon or is:armor) is:uncommon)",
        default: 0,
        options: ["Trash"],
      },
      {
        key: "commonItems",
        display: "Common Weapons/Armor",
        filter: "((is:weapon or is:armor) is:common)",
        default: 0,
        options: ["Trash"],
      },
    ],
  },
  {
    display: "Tags",
    options: [
      {
        key: "tagFavorite",
        display: "Favorite",
        filter: "tag:favorite",
        default: 0,
        options: ["Keep", "Trash", "Don't care"],
      },
      {
        key: "tagKeep",
        display: "Keep",
        filter: "tag:keep",
        default: 0,
        options: ["Keep", "Trash", "Don't care"],
      },
      {
        key: "tagJunk",
        display: "Junk",
        filter: "tag:junk",
        default: 1,
        options: ["Keep", "Trash", "Don't care"],
      },
      {
        key: "tagInfuse",
        display: "Infuse",
        filter: "tag:infuse",
        default: 0,
        options: ["Keep", "Trash", "Don't care"],
      },
      {
        key: "tagArchive",
        display: "Archive",
        filter: "tag:archive",
        default: 0,
        options: ["Keep", "Trash", "Don't care"],
      },
    ],
  },
  {
    display: "Weapons",
    options: [
      {
        key: "weaponsDeepsightPattern",
        display: "Deepsight Pattern",
        filter: "(is:weapon -is:patternunlocked deepsight:pattern)",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "weaponsDeepsightIncomplete",
        display: "Deepsight Incomplete",
        filter: "(is:weapon deepsight:incomplete)",
        default: -1,
        options: ["Keep"],
      },
      {
        key: "weaponsCraftable",
        display: "Non-crafted Craftable",
        filter: "(is:weapon is:patternunlocked -is:crafted)",
        default: -1,
        options: ["Trash"],
      },
      {
        key: "weaponsStaticRollDuplicates",
        display: "Static Roll Duplicates",
        filter: "(is:weapon -is:randomroll is:dupelower)",
        default: 0,
        options: ["Trash"],
      },
      {
        key: "weaponsWishlistDuplicates",
        display: "Wishlist Duplicates",
        filter: "(is:weapon is:wishlistdupe -is:wishlist is:dupelower)",
        default: 0,
        options: ["Trash"],
      },
    ],
  },
  {
    display: "Armor",
    options: [
      {
        key: "tmMania",
        display: "TMMania's Statistics",
        filter: [
          "(is:armor ((basestat:highest:>=23 ((basestat:recovery:>=23) or (is:hunter (basestat:mobility:>=23 or basestat:recovery:>=23)))) or (basestat:highest&secondhighest:>=18 ((basestat:recovery:>=13 basestat:mobility:<13) or (is:hunter (basestat:mobility:>=13 or basestat:recovery:>=13)))) or (basestat:highest&secondhighest&thirdhighest:>=15 basestat:secondhighest:>=11 ((basestat:recovery:>=11 basestat:mobility:<11) or (is:hunter (basestat:mobility:>=11 or basestat:recovery:>=11)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest:>=13.25 basestat:fourthhighest:>=10 ((basestat:recovery:>=10 basestat:mobility:<10) or (is:hunter (basestat:mobility:>=10 or basestat:recovery:>=10)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest:>=11.6 basestat:fifthhighest:>=6 ((basestat:recovery:>=6 basestat:mobility:<6) or (is:hunter (basestat:mobility:>=6 or basestat:recovery:>=6)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest&sixthhighest:>=9.833 basestat:sixthhighest:>=6)))",
          "(is:armor ((basestat:highest:>=24 ((basestat:recovery:>=24 basestat:mobility:<24) or (is:hunter (basestat:mobility:>=24 or basestat:recovery:>=24)))) or (basestat:highest&secondhighest:>=19 basestat:secondhighest:>=14 ((basestat:recovery:>=14 basestat:mobility:<14) or (is:hunter (basestat:mobility:>=14 or basestat:recovery:>=14)))) or (basestat:highest&secondhighest&thirdhighest:>=15.666 basestat:secondhighest:>=12 ((basestat:recovery:>=12 basestat:mobility:<12) or (is:hunter (basestat:mobility:>=12 or basestat:recovery:>=12)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest:>=13.75 basestat:fourthhighest:>=10 ((basestat:recovery:>=10 basestat:mobility:<10) or (is:hunter (basestat:mobility:>=10 or basestat:recovery:>=12)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest:>=12 basestat:fifthhighest:>=6 ((basestat:recovery:>=6 basestat:mobility:<6) or (is:hunter (basestat:mobility:>=6 or basestat:recovery:>=6)))) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest&sixthhighest:>=10.333 basestat:sixthhighest:>=6)))",
          "(is:armor (basestat:highest:>=26 or (basestat:highest&secondhighest:>=20.5 basestat:secondhighest:>=15) or (basestat:highest&secondhighest&thirdhighest:>=16.666 basestat:secondhighest:>=12) or (basestat:highest&secondhighest&thirdhighest&fourthhighest:>=14.25 basestat:fourthhighest:>=10) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest:>=12.2 basestat:fifthhighest:>=6) or (basestat:highest&secondhighest&thirdhighest&fourthhighest&fifthhighest&sixthhighest:>=10.333 basestat:sixthhighest:>=6)))",
        ],
        default: 0,
        options: ["Basic", "Mid-Game", "End-Game", "Don't care"],
      },
      {
        key: "armorMaxBaseStat",
        display: "Maximum of a Stat",
        filter: "(is:armor maxbasestatvalue:any)",
        default: -1,
        options: ["Keep"],
      },
      {
        key: "armorTotalBaseStat",
        display: "Total Stats Above:",
        filter: (value) => `(is:armor basestat:total:>=${value})`,
        value: 65,
        default: 0,
        options: ["Keep"],
      },
      {
        key: "armorCustomBaseStat",
        display: "Custom Stats Above:",
        filter: (value) => `(is:armor basestat:custom:>=${value})`,
        value: 50,
        default: -1,
        options: ["Keep"],
      },
      {
        key: "armorRaid",
        display: "Raid Armor",
        filter: "(is:armor source:raid -is:dupelower -source:dcv)",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "armorEvent",
        display: "Event Armor",
        filter: "(is:armor source:events)",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "armor1",
        display: "Armor 1.0",
        filter: "(is:armor -is:armor2.0)",
        default: 0,
        options: ["Keep", "Trash", "Don't care"],
      },
    ],
  },
  {
    display: "Class Items",
    options: [
      {
        key: "classItemMinEnergy",
        display: "Minimum Energy:",
        value: 7,
        valueMax: 10,
        filter: (value) => `(is:classitem energycapacity:>=${value})`,
        default: 0,
        options: ["Keep"],
      },
    ],
  },
];

export const DimSearchBuilder = () => {
  const [toggleState, setToggleState] = useToggleState({});

  const handleChange = (key, current) => {
    setToggleState((previousToggles) => {
      const newToggles = { ...previousToggles };
      newToggles[key] = current;
      return newToggles;
    });
  };

  return (
    <StyledDimSearchBuilder>
      <div>
        <h1>DIM Search Builder</h1>
        <p>
          Using the options below, you can construct your own junk, infusion,
          and vendor item finder search strings for use in{" "}
          <A href="https://destinyitemmanager.com/">DIM</A>.
        </p>
        <p>
          Green preferences are to keep, red preferences are to trash. Locked
          items are <i>never</i> included in trash.
        </p>
        <p>
          <i>I take no responsibility for deleted god rolls...</i> 😉
        </p>
      </div>
      <div>
        <DimSearchBuilderToggles
          toggles={toggles}
          toggleState={toggleState}
          onChange={handleChange}
        />
        <DimSearchBuilderResults toggles={toggles} toggleState={toggleState} />
      </div>
    </StyledDimSearchBuilder>
  );
};
