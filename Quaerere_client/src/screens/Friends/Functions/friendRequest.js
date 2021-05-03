import firebase from "../../../firebase/config.js";

export const friendRequest = async (newPendingFriend, user, friend) => {
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
    });
};
