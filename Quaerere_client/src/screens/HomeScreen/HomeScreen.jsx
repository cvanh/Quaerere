import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function HomeScreen(user) {
  const themeStatusBarStyle =
    user.theme === "light" ? "dark-content" : "light-content";
  const themeTextStyle =
    user.theme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    user.theme === "light" ? styles.lightContainer : styles.darkContainer;
  return (
    <View style={[styles.container, styles.darkContainer]}>
      <Text style={styles.darkThemeText}>
        Welcome, <Text style={styles.darkThemeText}>{user.name}</Text>
      </Text>
      <View style={styles.footerView}>
        <Text style={styles.footerLink} onPress={() => signOut()}>
          Sign out?
        </Text>
      </View>
    </View>
  );
}
