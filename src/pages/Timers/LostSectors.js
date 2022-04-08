import CycleCard from "../../components/CycleCard";
import { lcm } from "../../functions/gcd";

const locations = [
  {
    name: "K1 Crew Quarters - Moon",
    info: "http://kyber3000.com/LS-K1CrewQuarters",
  },
  { name: "K1 Logistics - Moon", info: "http://kyber3000.com/LS-K1Logistics" },
  {
    name: "Metamorphosis - Throne World",
    info: "https://kyber3000.com/LS-Metamorphosis",
  },
  {
    name: "Sepulchur - Throne World",
    info: "https://kyber3000.com/LS-Sepulcher",
  },
  {
    name: "Extraction - Throne World",
    info: "http://kyber3000.com/LS-Extraction",
  },
  {
    name: "Veles Labyrinth - Cosmodrome",
    info: "http://kyber3000.com/LS-VelesLabyrinth",
  },
  {
    name: "Exodus Garden A2 - Cosmodrome",
    info: "https://i.imgur.com/88r6qcR.png",
  },
  {
    name: "Aphelion's Rest - Dreaming City",
    info: "http://kyber3000.com/LS-AphelionsRest",
  },
  {
    name: "Bay of Drowned Wishes - Dreaming City",
    info: "http://kyber3000.com/LS-BayofDrownedWishes",
  },
  {
    name: "Chamber of Starlight - Dreaming City",
    info: "http://kyber3000.com/LS-ChamberofStarlight",
  },
  {
    name: "K1 Revelation - Moon",
    info: "http://kyber3000.com/LS-K1Revelation",
  },
];

const drops = ["Arms", "Chest", "Helmet", "Legs"];

const items = [];

do {
  items.push(
    <>
      <a
        href={locations[items.length % locations.length].info}
        target="_blank"
        rel="noreferrer"
      >
        {locations[items.length % locations.length].name}
      </a>
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
