const fs = require("fs");

const index = fs
  .readdirSync(".")
  .filter((file) => file.endsWith(".png"))
  .map(
    (file) =>
      `export { default as ${file.replace(/\.[^/.]+$/, "")} } from "./${file}";`
  )
  .join("\n");

fs.writeFileSync("./index.js", index);
