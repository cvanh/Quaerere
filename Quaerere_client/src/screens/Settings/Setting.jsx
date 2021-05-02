import React, { useState, useEffect } from "react";
import { Text, View, Image, Platform, Button } from "react-native";
import styles from "./styles";
import { Avatar } from "react-native-elements";
import firebase from "../../firebase/config.js";
import * as ImagePicker from "expo-image-picker";
import { v4 as uuidv4 } from "uuid";
export default function Settings(user) {
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

  const pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    await handleImagePicked(pickerResult);
  };

  const handleImagePicked = async (pickerResult) => {
    try {
      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        setCroppedImage(pickerResult);
      }
    } catch (e) {
      console.error(e);
    } finally {
      console.log("image picked epic ");
    }
  };

  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    await storageRef
      .child(uuidv4())
      .put(blob)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadurl) => {
          setUploadedCroppedImage(downloadurl);
          console.log("set cropped image");
        });
      });
    blob.close();
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => alert("successfully signed out!"));
  };

  const changeAvatar = async () => {
    await firebase.database().ref(`users/${user.id}`).set({
      name: user.name,
      email: user.email,
      id: user.id,
      avatar: uploadedCroppedImage,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Welcome {user.name}</Text>
      <Text style={styles.marginTop}>Avatar:</Text>
      <Avatar
        size="large"
        onPress={() => pickImage()}
        source={{ uri: croppedImage.uri || user.avatar }}
      >
        <Avatar.Accessory size={20} />
      </Avatar>
      {croppedImage.uri && (
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
