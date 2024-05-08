const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    app_deep_link: "./src/index.js",
    "app_deep_link.min": "./src/index.js",
  },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: (chunkData) => {
  //     return chunkData.chunk.name === "app_deep_link.min"
  //       ? "public/[name].min.js"
  //       : "public/[name].js";
  //   },

  //   library: "AppDeepLink",
  //   libraryTarget: "umd",
  // },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    library: "AppDeepLink",
    libraryTarget: "umd",
  },
  
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.min\.js$/i, // This line is added
      }),
    ],
  },
};
