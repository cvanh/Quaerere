// in your index.ios.js or index.android.js
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "react-native-ble-manager/example/App"; //<-- simply point to the example js!

AppRegistry.registerComponent("MyAwesomeApp", () => App);

function Create(){
    BleManager.scan([], 5, true).then(() => {
        // Success code
        console.log("Scan started");
      });
}