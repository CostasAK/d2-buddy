import Masonry from "@mui/lab/Masonry";
import Page from "layout/Page";
import Card from "../../components/Card";
import blueberries_logo from "./assets/blueberries.gg.jpg";

const links = [
  {
    title: "Destiny Item Manager",
    link: "https://app.destinyitemmanager.com/",
    description:
      "Great for managing your vault and loadouts. Can also track triumphs and look up vendors.",
    logo: "https://crowdin-static.downloads.crowdin.com/images/project-logo/285312/small/6ce19d53988be6a3140c7a0646dad0de73.png",
  },
  {
    title: "Braytech",
    link: "https://bray.tech/",
    description:
      "Focusses on tracking weeklies, checklists, challenges, triumphs, quests and activities.",
    logo: "https://bray.tech/static/images/icons/icon-192.png",
  },
  {
    title: "Ishtar Collective",
    link: "https://www.ishtar-collective.net/",
    description: "Here you can find all the organised lore entries of Destiny.",
    logo: "https://yt3.ggpht.com/a/AGF-l7_7ERZ7Bl1YysHY2v-6Jyv5PT0q7SLSPRbhSA=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    title: "Blueberries.gg",
    link: "https://www.blueberries.gg/",
    description:
      "Offers 'Getting Started' type guides such as the Leveling Guide (which includes the power caps of the current season), and lists of recommended weapons, armor, etc.",
    logo: blueberries_logo,
  },
  {
    title: "Light.gg",
    link: "https://www.light.gg/",
    description:
      "Look up weapons in the game and all the perks they can roll with. Has ratings for weapons and perk combinations and will rate the rolls in your vault for you as well when you log in. Do note that most of the time these rating will be automated and therefore might not be the most useful in finding a god roll, but it's a start.",
    logo: "https://www.light.gg/Content/Images/new-icon.png",
  },
  {
    title: "Engram Blue",
    link: "https://engram.blue/",
    description:
      "Check the state of your weapon crafts, and other tools of questionable worth (their words, not mine).",
    logo: "https://engram.blue/favicon.png",
  },
];

export default function Links(props) {
  return (
    <Page
      title="Links"
      description="I have no affiliation with the sites listed. I just think they're great."
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {links.map((link) => (
          <Card
            key={link.title}
            link={link.link}
            icon={link.logo}
            title={link.title}
            className="link"
            floatIcon
          >
            {link.description}
          </Card>
        ))}
      </Masonry>
    </Page>
  );
}
