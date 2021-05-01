import firebase from "../../../firebase/config.js";

export const LoginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
