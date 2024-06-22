const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      title: "DarkRiot TODO - Homepage",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
