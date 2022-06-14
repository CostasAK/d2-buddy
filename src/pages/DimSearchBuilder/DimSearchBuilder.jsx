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
        default: true,
        keep: true,
      },
      {
        key: "itemsInLoadouts",
        display: "Items in Loadouts",
        filter: "is:inloadout",
        default: true,
        keep: true,
      },
      {
        key: "masterworkedItems",
        display: "Masterworked Items",
        filter: "is:masterwork",
        default: true,
        keep: true,
      },
      {
        key: "classifiedItems",
        display: "Classified Items",
        filter: "name:classified",
        default: true,
        keep: true,
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
        default: true,
        keep: true,
      },
      {
        key: "tagKeep",
        display: "Keep",
        filter: "tag:keep",
        default: true,
        keep: true,
      },
      {
        key: "tagJunk",
        display: "Junk",
        filter: "tag:junk",
        default: false,
        keep: true,
      },
      {
        key: "tagInfuse",
        display: "Infuse",
        filter: "tag:infuse",
        default: true,
        keep: true,
      },
      {
        key: "tagArchive",
        display: "Archive",
        filter: "tag:archive",
        default: true,
        keep: true,
      },
    ],
  },
  {
    display: "Weapons",
    options: [
      {
        key: "weaponsStaticRollDuplicates",
        display: "Static Roll Duplicates",
        filter: "(is:weapon -is:randomroll is:dupelower)",
        default: true,
        keep: false,
      },
    ],
  },
  {
    display: "Armor",
    options: [
      {
        key: "armor1",
        display: "Armor 1.0",
        filter: "(is:armor -is:armor2.0)",
        default: true,
        options: ["Keep", "Trash", "Don't care"],
      },
      {
        key: "armorEvent",
        display: "Event Armor",
        filter: "(is:armor source:events)",
        default: true,
        keep: true,
      },
    ],
  },
  {
    display: "Class Items",
    options: [],
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
        <p>Green preferences are to keep, red preferences are to trash.</p>
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
