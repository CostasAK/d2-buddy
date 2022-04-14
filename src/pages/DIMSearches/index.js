import { ItemizedPage } from "../../components/ItemizedPage";

const searches = [
  {
    title: "General clean-up",
    description:
      "This search will highlight trash, junk, slow sparrows, commons/rares, duplicate curated exoctics, non-wishlist duplicate weapons, 'bad' armor and non-tagged or unlocked class items. It excludes locked, favorited, tagged with keep and maximum power items.<br/><u>The thresholds only work properly if you set your 3 preferred stats in the DIM Settings under Custom Total</u>. Recommended: <code>Rec+Dis+Int</code> for Warlocks, <code>Res+Rec+Int</code> for Titans, and <code>Mob+Rec+Int</code> for Hunters. Adjust the 65 and 50 thresholds to your own liking in the search string, those are just recommendations.<br/><br/><code>-is:locked -tag:favorite -tag:keep -is:maxpower (is:haspower or is:vehicle) (is:trashlist or tag:junk or (is:vehicle power:<160) or (-is:legendary -is:exotic) or is:sunset or (is:exotic is:weapon is:dupelower -name:hawkmoon -name:\"dead man's tale\") or (is:weapon is:wishlistdupe -is:wishlist is:dupelower) or (is:armor -is:classitem is:legendary basestat:total:<65 basestat:custom:<50) or is:classitem)</code>",
  },
  {
    title: "To find weapons you might want to use for infusion",
    description: "<code>is:wishlistdupe -is:wishlist -is:dupelower</code>",
  },
  {
    title: "To clear out your inventory and postmaster",
    description: "<code>-is:equipped is:haspower is:incurrentchar</code>",
  },
  {
    title: "To search vendors for interesting items",
    description:
      "Just like with the general clean-up string, you can adjust the 65 and 50 thresholds to your own liking here as well, they are just recommendations.<br/><br/><code>((is:armor (basestat:total:>=65 or basestat:custom:>=50)) or is:wishlist or is:weaponmod or is:armormod) -source:eververse</code>",
  },
  {
    title: "Vault Analyzer",
    description: "TMMania's DIM Search Gallery",
    link: "https://docs.google.com/spreadsheets/d/1fzn1iLI91aJOe3Wj9Vp7x41qIujjW1tRtoTLB6V_X7E/edit?usp=sharing",
    logo: "https://avatars.githubusercontent.com/u/74565769?v=4",
  },
];

const DIMSearches = (props) => {
  return <ItemizedPage className="Links" items={searches} columnWidth={480} />;
};

export default DIMSearches;