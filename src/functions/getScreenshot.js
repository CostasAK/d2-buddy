const bungie_root_path = "https://bungie.net";

function getWeaponElement(data) {
  const screenshot = data.Response.screenshot || data.Response.pgcrImage;
  return screenshot ? bungie_root_path + screenshot : null;
}

export default getWeaponElement;
