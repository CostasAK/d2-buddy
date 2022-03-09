import { ItemizedPage } from "../../components/ItemizedPage";

const links = [
  {
    title: "Destiny Item Manager",
    link: "https://app.destinyitemmanager.com/",
    description:
      "Great for managing your vault and loadouts. Can also track triumphs and look up vendors.",
  },
  {
    title: "Braytech",
    link: "https://bray.tech/",
    description:
      "Focusses on tracking weeklies, checklists, challenges, triumphs, quests and activities.",
  },
  {
    title: "Ishtar Collective",
    link: "https://www.ishtar-collective.net/",
    description: "Here you can find all the organised lore entries of Destiny.",
  },
  {
    title: "Blueberries.gg",
    link: "https://www.blueberries.gg/",
    description:
      "Offers 'Getting Started' type guides such as the Leveling Guide (which includes the power caps of the current season), and lists of recommended weapons, armor, etc.",
  },
  {
    title: "Light.gg",
    link: "https://www.light.gg/",
    description:
      "Look up weapons in the game and all the perks they can roll with. Has ratings for weapons and perk combinations and will rate the rolls in your vault for you as well when you log in. Do note that most of the time these rating will be automated and therefore might not be the most useful in finding a god roll, but it's a start.",
  },
];

export function Links(props) {
  return (
    <div>
      I have no affiliation with the sites listed. I just think they're great.
      <br />
      <br />
      <ItemizedPage className="Links" items={links} />
    </div>
  );
}
