import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Friends from "./Friends.jsx";
import { Avatar } from "react-native-elements";
import styles from "./styles.js";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { friendRequest } from "./Functions/friendRequest.js";
export default function FriendsList(user) {
  const [friendsList, setFriends] = useState([]);
  const [email, setEmail] = useState("");

  const notiRef = firebase.database().ref("notifications");

  const usersRef = firebase.database().ref("users");

  useEffect(() => {
    addListeners();
  }, []);

  const addListeners = async () => {
    let loadedF = [];
    await firebase
      .database()
      .ref(`users/${user.id}/friends`)
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          loadedF.push(snap.val());
          setFriends(loadedF);
        });
      });
  };
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

            friendRequest(newPendingFriend, user, friend, notiRef);
            alert(`succesfully added ${friend.name} as a friend`);
          }
        });
      });
  };
  const displayFriends = () =>
    friendsList.length > 0 &&
    friendsList.map((friend) => (
      <View key={friend.id} style={styles.friendsList}>
        <Avatar rounded size="medium" source={{ uri: friend.avatar }} />
        <Text style={styles.friendName}>{friend.name}</Text>
      </View>
    ));

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ width: "100%" }}
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
      {friendsList.length > 0 ? (
        <View>{displayFriends()}</View>
      ) : (
        <Text style={styles.noFriends}>Your friends will appear here!</Text>
      )}
    </View>
  );
}
