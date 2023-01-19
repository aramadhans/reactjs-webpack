import { AppRegistry } from "react-native";
import App from "./src/App";
import "./src/App.css";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("app"),
});
