/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const modules = fs.readdirSync(path.join(__dirname, "src")).map((value) => {
  return path.basename(value, path.extname(value));
});

module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
    ["@emotion/babel-preset-css-prop"],
  ],
  plugins: [
    "macros",
    "@emotion/babel-plugin",
    [
      "module-resolver",
      {
        alias: modules.reduce(
          (prev, cur) => ({ ...prev, [cur]: `./src/${cur}` }),
          {}
        ),
      },
    ],
  ],
};
