import React from "react";
import AvatarEditor from "react-avatar-editor";
import { Text, View, Button } from "react-native";
import styles from "../styles.js";
import {Avatar} from "react-native-elements"
export default function AvatarPicker(props) {
  console.log(props);
  const useNode = (node) => {
    props.setAvatarEditor(node);
  };

  return (
    <>
      <Button title="Change avatar" onPress={() => props.handleChange()} />

       {props.croppedImage && (
         <Avatar source={{uri:props.croppedImage.uri}}/>
       )}
    </>
  );
}
