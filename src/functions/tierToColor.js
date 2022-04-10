const known_tiers = { Legendary: "#4e3263", Exotic: "#cdad34" };

function tierToColor(tier) {
  return known_tiers[tier] || "#04040e";
}

export default tierToColor;
