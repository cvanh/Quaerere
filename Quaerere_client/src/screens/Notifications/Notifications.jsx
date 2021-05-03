import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { Avatar } from "react-native-elements";
import styles from "./styles.js";
import firebase from "../../firebase/config.js";
import { v4 as uuidv4 } from "uuid";
export default function Notifications(user) {
  const [notifications, setNotifications] = useState([]);
  const [friends, setFriends] = useState([]);
  const userRef = firebase.database().ref("users");
  const notiRef = firebase.database().ref("notifications");

  useEffect(() => {
    addListeners();
  }, []);

  const addListeners = async () => {
    let loaded_notification = [];
    let loaded_friends = [];
    const id = user.id;

    notiRef.on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        console.log(snap.val());
        loaded_notification.push(snap.val());
        setNotifications(loaded_notification);
      });
    });

    await firebase
      .database()
      .ref(`users/${id}/pendingFriends`)
      .on("value", (snap) => {
        loaded_friends.push(snap.val());
        setFriends(loaded_friends);
      });
  };
  const timeFromNow = timestamp => moment(timestamp).fromNow();
  const displayNotifications = () =>
    notifications.length > 0 &&
    notifications.map((notification) => (
      <>
        {notification.notification.id === user.id && (
          <View key={uuidv4()}>
            <View style={styles.container}>
              <View style={styles.user}>
                <Avatar
                  source={{
                    uri: notification.notification.avatar || user.avatar,
                  }}
                  size="large"
                  rounded
                />

                <Text style={styles.notiheader}>
                  {notification.notification.name}
                </Text>
              </View>
            </View>
          </View>
        )}
      </>
    ));
  return (
    <View style={styles.container}>
      {notifications.length <= 0 ? (
        <Text style={styles.noNotification}>
          Your notifications will appear here!
        </Text>
      ) : (
        <View style={styles.container}>{displayNotifications()}</View>
      )}
    </View>
  );
}
