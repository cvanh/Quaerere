import React from "react";
import AvatarEditor from "react-avatar-editor";
import { Text, View } from "react-native";
import styles from "../styles.js";

export default function AvatarPicker(props) {
  console.log(props);
  const useNode = (node) => {
    props.setAvatarEditor(node);
  };

  return (
    <View style={styles.container}>
         
      </View>
  );
}
