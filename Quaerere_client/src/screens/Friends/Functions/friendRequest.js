import firebase from "../../../firebase/config.js";

export const friendRequest = async (newPendingFriend, user, friend, notiRef) => {
  await firebase
    .database()
    .ref(`users/${friend.id}/pendingFriends`)
    .child(user.id)
    .update(newPendingFriend)
    .then(() => {
      console.log(`added ${friend.name}`);
    })
    .catch((e) => {
      console.error(e);
    })
    .then(() => {
      const newNotification = {
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        id: friend.id,
        notification: {
          id: user.id,
          avatar: user.avatar,
          name: user.name,
          email: user.email,
          message: `${user.name} has added you as a friend.`,
        },
      };
      notiRef.child(user.id).update(newNotification)
    });
};
