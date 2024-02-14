import webpack from "webpack";
import path from "path";
import SmartHtmlPlugin from "../src";

const config = {
  entry: path.join(__dirname, "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [new SmartHtmlPlugin()],
};

webpack(config, (err, stats) => {
  console.log();
});
