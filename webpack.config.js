const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "none",
  entry: {
    app_deep_link: "./src/index.js",
    "app_deep_link.min": "./src/index.js",
  },
  output: {
    filename: (chunkData) => {
      return chunkData.chunk.name === "app_deep_link.min"
        ? "public/[name].min.js"
        : "public/[name].js";
    },
    library: "AppDeepLink",
    libraryTarget: "umd",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/i,
      }),
    ],
  },
};
