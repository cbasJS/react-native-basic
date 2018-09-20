import React, { Component } from "react";
import { AppRegistry } from "react-native";
import AppContainer from "./src/AppContainer";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent("passgenerator", () => App);
