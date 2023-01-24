{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".svg"]
      }
    ],
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin"
  ]
}
