import * as React from "react";
import { View, Text } from "react-native";
import './assets/css/base.css';
import {MenuToggle} from '/assets/js/script.js';
import {JsonFill} from './assets/js/components.js'

export default function menu() {
  return (
    <View
      style={{
        backgroundColor: 'green',
      }}
    >
      <div id="menu_knop" style={{display: "none"}}>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </View>,
    <View>
      <a href='#' onClick={MenuToggle}>
        menubutton
        </a>
    </View>
  );
}



menu();
JsonFill();
MenuToggle();