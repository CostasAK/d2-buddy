import CycleCard from "../../components/CycleCard";
import { LostSector } from "../../components/LostSector";
import { Modal } from "../../components/Modal";
import { lcm } from "../../functions/gcd";
import { useMemo } from "react";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

function LostSectorLink({ location }) {
  return (
    <Modal
      triggerContent={
        <span className="a-link">
          {location.name} - {location.location}
        </span>
      }
    >
      <LostSector name={location.name} />
    </Modal>
  );
}

export default function LostSectors() {
  const items = useMemo(() => {
    const locations = [
      {
        name: "K1 Crew Quarters",
        location: "Moon",
      },
      {
        name: "K1 Logistics",
        location: "Moon",
      },
      {
        name: "Metamorphosis",
        location: "Throne World",
      },
      {
        name: "Sepulcher",
        location: "Throne World",
      },
      {
        name: "Extraction",
        location: "Throne World",
      },
      {
        name: "Veles Labyrinth",
        location: "Cosmodrome",
      },
      {
        name: "Exodus Garden A2",
        location: "Cosmodrome",
      },
      {
        name: "Aphelion's Rest",
        location: "Dreaming City",
      },
      {
        name: "Bay of Drowned Wishes",
        location: "Dreaming City",
      },
      {
        name: "Chamber of Starlight",
        location: "Dreaming City",
      },
      {
        name: "K1 Revelation",
        location: "Moon",
      },
    ];

    const drops = ["Arms", "Chest", "Helmet", "Legs"];

    let items = [];

    do {
      items.push(
        <div>
          <LostSectorLink
            location={locations[items.length % locations.length]}
          />
          {" ("}
          {drops[items.length % drops.length]}
          {")"}
        </div>
      );
    } while (items.length < lcm(drops.length, locations.length));

    return items;
  }, []);

  return (
    <CycleCard
      name="Legend & Master Lost Sector"
      items={items}
      start={1648918800 * 1000}
      period={day}
      icon="https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png"
    />
  );
}
