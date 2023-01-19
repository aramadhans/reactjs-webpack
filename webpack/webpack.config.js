const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const appDirectory = path.resolve(__dirname, "../");

module.exports = {
  entry: "./index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devServer: {
    port: 3030,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(appDirectory, "index.js"),
          path.resolve(appDirectory, "src"),
          path.resolve(appDirectory, "node_modules/react-native-uncompiled"),
          path.resolve(appDirectory, "node_modules/react-native-toast-message"),
          path.resolve(appDirectory, "node_modules/react-native-reanimated"),
          path.resolve(
            appDirectory,
            "node_modules/react-native-markdown-package"
          ),
          path.resolve(appDirectory, "node_modules/react-native-lightbox"),
          path.resolve(appDirectory, "node_modules/react-native-drop-shadow"),
          path.resolve(
            appDirectory,
            "node_modules/react-native-gesture-handler"
          ),
        ],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      "react-native": "react-native-web",
      "react-native-svg": "react-native-svg-web",
    },
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      __DEV__: process.env.NODE_ENV !== "production",
    }),

    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
    new webpack.DefinePlugin({ process: { env: {} } }),
  ],
};
