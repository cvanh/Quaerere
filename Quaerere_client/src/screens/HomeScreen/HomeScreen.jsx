import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen(props) {
  const user = props.user;
  console.log(user);
  return (
    <View>
      <Text>username = {user.name}</Text>
      <Text>user email = {user.email} </Text>
    </View>
  );
}
