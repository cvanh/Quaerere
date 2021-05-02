import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function HomeScreen(user) {
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
