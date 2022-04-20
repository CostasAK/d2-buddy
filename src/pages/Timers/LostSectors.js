import CycleCard from "../../components/CycleCard";
import LostSector from "../../components/LostSector";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Popup from "reactjs-popup";
import { lcm } from "../../functions/gcd";

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

const items = [];

do {
  items.push(
    <>
      <Popup
        trigger={
          <span className="a-link">
            {locations[items.length % locations.length].name} -{" "}
            {locations[items.length % locations.length].location}
          </span>
        }
        modal
      >
        <OverlayScrollbarsComponent className="os-theme-light modal">
          <LostSector name={locations[items.length % locations.length].name} />
        </OverlayScrollbarsComponent>
      </Popup>
      {" ("}
      {drops[items.length % drops.length]}
      {")"}
    </>
  );
} while (items.length < lcm(drops.length, locations.length));

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export default function LostSectors() {
  return (
    <CycleCard
      name="Legend & Master Lost Sector"
      items={items}
      start={1648918800 * 1000}
      period={day}
      type="duty"
    />
  );
}
