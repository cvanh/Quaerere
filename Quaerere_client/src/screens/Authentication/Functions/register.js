import firebase from "../../../firebase/config.js";

export const createNewUser = (props) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(props.email.trim(), props.password)
    .then((createdUser) => {
      createdUser.user
        .updateProfile({
          displayName: props.fullName,
        })
        .then(() => {
          props.saveUser(createdUser);
        })
        .catch((e) => console.error(e));
    });
};
