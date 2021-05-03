import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { friendRequest } from "./Functions/friendRequest.js";
import styles from "./styles";
import firebase from "../../firebase/config.js";
export default function Friends(user) {
  const [email, setEmail] = useState("");

  const addFriend = () => {
    firebase
      .database()
      .ref("users")
      .orderByChild("id")
      .once("value", (snap) => {
        snap.forEach((child) => {
          //@@TODO: reiterate on the way we want to add friends. do we want to
          //use e-mails? or just a user name. Maybe we want to have snowflakes
          //like discord has. We should come back to this
          if (child.val().email == email) {
            const friend = child.val();
            const newPendingFriend = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
              email: user.email,
            };

            friendRequest(newPendingFriend, user, friend);
            alert(`succesfully added ${friend.name} as a friend`);
          }
        });
      });
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <TextInput
          style={styles.input}
          placeholder="friend's email"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => addFriend()}>
          <Text style={styles.buttonTitle}>Add Friend</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
