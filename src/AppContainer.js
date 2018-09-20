import React, { Component } from "react";
import { View, Alert, Text } from "react-native";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlink: false,
      isTouch: false
    };
    this.interval = null;
  }

  _blinkDisable = () => {
    clearInterval(this.interval);
    this.setState({
      isBlink: false,
      isTouch: false
    });
  };

  _blinkEnable = () => {
    this.interval = setInterval(() => {
      this.setState(previousState => {
        return { isBlink: !previousState.isBlink };
      });
    }, 1000);
    this.setState({ isTouch: true });
  };

  _blinkAction = () =>
    !this.state.isTouch ? this._blinkEnable() : this._blinkDisable();

  render() {
    return (
      <View style={{ flex: 1 }} onTouchStart={this._blinkAction}>
        <View
          style={{
            flex: 1,
            backgroundColor: this.state.isBlink ? "#fff" : "powderblue"
          }}
        />
        <View
          style={{
            flex: 2,
            backgroundColor: this.state.isBlink ? "#fff" : "skyblue"
          }}
        />
        <View
          style={{
            flex: 3,
            backgroundColor: this.state.isBlink ? "#fff" : "steelblue"
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: this.state.isBlink ? "tomato" : "#fff"
              }}
            >
              Touch the screen!
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
