import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import firebase from "../../firebase/config.js";
export default function Settings(user) {
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => alert("successfully signed out!"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Welcome {user.name}</Text>
      <Text style={styles.marginTop}>Avatar:</Text>
      <Image
        style={styles.userAvatar}
        source={{ uri: user.avatar }}
        resizeMode="contain"
      />

      <Text style={styles.marginTop}>Username:</Text>
      <Text style={[styles.bold, styles.marginTop]}>{user.name}</Text>

      <Text style={styles.marginTop}> E-mail:</Text>
      <Text style={[styles.bold, styles.marginTop]}>{user.email}</Text>
      <Text
        style={[styles.marginTop, styles.footerLink]}
        onPress={() => signOut()}
      >
        Sign out?
      </Text>
    </View>
  );
}
