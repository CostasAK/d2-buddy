const bungie_root_path = "https://bungie.net";

export function getScreenshot(data) {
  const screenshot = data?.screenshot || data?.pgcrImage;
  return screenshot ? bungie_root_path + screenshot : null;
}
