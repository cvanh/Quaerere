import * as React from "react";
import { render } from "react-dom";
import { View, Text } from "react-native";
import {MenuToggle} from './script.js'
// export const JsonFill = () => {
//   render();
//     return (
//       <View>
//         <Text>asdasd</Text>
//       </View>
//     )
  
// }
export const JsonFill = () =>(
  <View>
  <Text>lol</Text>
  </View>
)

// export const JsonFill = (guid) => {
//   render(
//       <View>
//         <text>asdasd</text>
//       </View>

//     );

//   }
export const menu = () => (
    <View>
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
