import firebase from "../../../firebase/config.js";

export const createNewUser = (props) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(props.email.trim(), props.password)
    .then((createdUser) => {
      createdUser.user
        .updateProfile({
          displayName: props.fullName,
          photoURL:props.photoURL,
          email:props.email,
        })
        .then(() => {
          props.saveUser(createdUser);
        })
        .catch((e) => console.error(e));
    });
};
