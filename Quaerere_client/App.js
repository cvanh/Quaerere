import * as React from "react";
import { View, Text } from "react-native";
import './assets/css/base.css';
import {Menu} from './assets/js/script.js';
import {json_fill} from './assets/js/components'

export default function menu() {
  return (
    <View
      style={{
        backgroundColor: 'green',
      }}
    >
      <div id="menu">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </View>,
    <View>
      <a href='#' onClick={Menu}>
        menubutton
        </a>
    </View>
  );
}
json_fill();
menu();