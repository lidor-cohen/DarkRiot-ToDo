const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "DarkRiot TODO",
      template: path.resolve(__dirname, "src/template.html"),
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets",
          },
        },
      },
    ],
  },
};
