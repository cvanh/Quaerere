import * as React from "react";
// import {render} from "react-native";
import './assets/css/base.css'; //imports css from styled-components
import { View, Text } from "react-native";
import {JsonFill, menu} 
from './assets/js/components.js' // Jsonfill fetches from data base and then displays it
import {JsonParse} from './assets/js/script.js' 

export default function Main() {
  return(<Text>text</Text>)
}
JsonParse('11a61a61-18ce-4037-8e3a-2f992e72a751');
// App();
// menu();
// JsonFill();
// MenuToggle();
// ReactDOM.render(menu, document.getElementById('root'));