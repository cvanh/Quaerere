import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import firebase from "../../firebase/config.js";

export default function HomeScreen(user) {
  console.log(user)
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => alert("successfully signed out!"));
  };

  return (
      <View style={styles.container}>
        <Text>Welcome, <Text style={styles.boldText}>{user.name}</Text></Text>
        <View style={styles.footerView}>
          <Text style={styles.footerLink} onPress={() => signOut()}>
            Sign out?
          </Text>
        </View>
      </View>
  );
}
