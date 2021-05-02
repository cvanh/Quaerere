import React, { useState, useEffect } from "react";
import { Text, View, Image, Platform, Button } from "react-native";
import styles from "./styles";
import { Avatar } from "react-native-elements";
import firebase from "../../firebase/config.js";
import AvatarPicker from "./Avatar/Avatar.jsx";
import * as ImagePicker from "expo-image-picker";
export default function Settings(user) {
  const [avatar, setAvatar] = useState(false);
  const [croppedImage, setCroppedImage] = useState("");
  const [uploadedCroppedImage, setUploadedCroppedImage] = useState("");
  const [blob, setBlob] = useState(null);
  const [uploadedUri, setUploadedUri] = useState("");
  const metadata = {
    contentType: "image/png",
  };
  const storageRef = firebase.storage().ref();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const handleImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.cancelled) {
      await setCroppedImage(result.uri);
      uploadCroppedImage();
    }
  };
  const uploadCroppedImage = async (mime = "application/octet-stream") => {
    const name = "profile" + user.id;
    console.log(croppedImage);
    firebase
      .storage()
      .ref("image")
      .child(`avatars/users/${user.id}`)
      .put(croppedImage, mime)
      .then((snap) => {
        snap.ref.getDownloadURL().then(async (url) => {
          console.log(url);
          await setUploadedCroppedImage(url);
        });
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => alert("successfully signed out!"));
  };

  const changeAvatar = async () => {
    console.log(uploadedCroppedImage);
    await firebase
      .database()
      .ref(`users/${user.id}`)
      .set({
        name: user.name,
        email: user.email,
        id: user.id,
        avatar: uploadedCroppedImage,
      })
      .then(() => {
        console.log(user.avatar);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Welcome {user.name}</Text>
      <Text style={styles.marginTop}>Avatar:</Text>
      <Avatar
        size="large"
        onPress={() => handleImage()}
        source={{ uri: croppedImage || user.avatar }}
      >
        <Avatar.Accessory size={20} />
      </Avatar>
      {croppedImage && (
        <Button
          title="Save avatar?"
          onPress={() => changeAvatar()}
          style={styles.saveAvatar}
        />
      )}

      <Text style={styles.marginTop}>Username:</Text>
      <Text style={[styles.bold, styles.marginTop]}>{user.name}</Text>

      <Text style={styles.marginTop}> E-mail:</Text>
      <Text style={[styles.bold, styles.marginTop]}>{user.email}</Text>
      <Text
        style={[styles.marginTop, styles.footerLink]}
        onPress={() => signOut()}
      >
        Sign out?
      </Text>
    </View>
  );
}
