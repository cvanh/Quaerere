import React, { useState, useEffect } from "react";
import { Text, View, Image, Button } from "react-native";
import { Avatar } from "react-native-elements";
import styles from "./styles.js";
import firebase from "../../firebase/config.js";
import { v4 as uuidv4 } from "uuid";
import { addFriend } from "./Functions/addFriend.js";
import moment from "moment";
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
        loaded_notification.push(snap.val());
        setNotifications(loaded_notification);
      });
    });

    await firebase
      .database()
      .ref(`users/${id}/pendingFriends`)
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          loaded_friends.push(snap.val());
          setFriends(loaded_friends);
        });
      });
  };

  const handleAdd = async (notification) => {
    const id = user.id;
    const notiId = notification.notification.id;
    console.log(friends);
    friends.length > 0 &&
      friends.map((friend) => {
        console.log(friend);
        if (friend.id === notiId) {
          console.log("yes");
          const newFriend = {
            id: friend.id,
            avatar: friend.avatar,
            name: friend.name,
            email: friend.email,
          };

          const userData = {
            id: user.id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
          };

          addFriend(newFriend, userData, friend, id, notiId);
          alert("accepted friend request");
        }
      });

    //This will remove the deleted notification from the array so the overview
    //updates in real time
    const array = notifications;
    let index = array.indexOf(notification);

    if (index > -1) {
      array.splice(index, 1);
    }

    let notiToDele = firebase
      .database()
      .ref(`notifications/${notification.notification.id}`);
    await notiToDele.remove();
  };
  const timeFromNow = (timestamp) => moment(timestamp).fromNow();
  const displayNotifications = () =>
    notifications.length > 0 &&
    notifications.map((notification) => (
      <>
        {notification.id === user.id && (
          <View key={notification.id}>
            <View style={styles.container}>
              <View style={styles.user}>
                <Avatar
                  source={{
                    uri: notification.notification.avatar || user.avatar,
                  }}
                  size="large"
                  rounded
                />

                <Text style={styles.message}>
                  {notification.notification.message}
                </Text>
                <Button
                  color="green"
                  onPress={() => handleAdd(notification)}
                  title="Add friend?"
                />
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
