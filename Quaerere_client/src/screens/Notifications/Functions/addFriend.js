import firebase from '../../../firebase/config.js';

export const addFriend = async (newFriend, userData, friend, id, notiId) => {
  await firebase
    .database()
    .ref(`users/${id}/friends`)
    .child(notiId)
    .update(newFriend)
    .then(() => {
      console.log('friend added');
    })
    .catch((e) => {
      console.error(e);
    });

  await firebase
    .database()
    .ref(`users/${friend.id}/friends`)
    .child(id)
    .update(userData)
    .then(() => {
      console.log('updated');
    })
    .catch((e) => {
      console.error(e);
    });

  await firebase
    .database()
    .ref(`users/${id}/pendingFriends`)
    .child(notiId)
    .remove();
};
