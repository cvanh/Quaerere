import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { Avatar } from "react-native-elements";
import firebase from "../../firebase/config.js";
import AvatarEditor from "react-avatar-editor";
import AvatarPicker from "./Avatar/Avatar.jsx";
import { launchImageLibrary } from "react-native-image-picker";
export default function Settings(user) {
  const [avatar, setAvatar] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [croppedImage, setCroppedImage] = useState("");
  const [uploadedCroppedImage, setUploadedCroppedImage] = useState("");
  const [blob, setBlob] = useState(null);
  const metadata = {
    contentType: "image/png",
  };
  let usersRef = firebase.database().ref("users");
  const storageRef = firebase.storage().ref();

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        setPreviewImage(reader.result);
      });
    }
  };
  const handleChoosePhoto = () => {
    const options = {
      mediaType: "photo",
      maxWidth: 300,
      quality: 1,
    };
    console.log("uyes");

    launchImageLibrary(options, (response) => {
      console.log(response);
      if (response.didCancel) {
        alert("User cancelled camera picker");
        return;
      }
    });
  };
  const handleCropImage = () => {
    if (avatarEditor) {
      avatarEditor.getImageScaledToCanvas().toBlob((blob) => {
        let imageUrl = URL.createObjectURL(blob);
        setCroppedImage(imageUrl);
        setBlob(blob);
      });
    }
  };

  const uploadCroppedImage = () => {
    storageRef
      .child(`avatars/users/${user.id}`)
      .put(blob, metadata)
      .then((snap) => {
        snap.ref.getDownloadURL().then((downloadurl) => {
          setUploadedCroppedImage(downloadurl, () => {
            changeAvatar();
          });
        });
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => alert("successfully signed out!"));
  };

  const changeAvatar = () => {
    usersRef
      .updateProfile({ photoURL: uploadedCroppedImage })
      .then(() => {
        console.log("avatar updated!");
        setAvatar(false);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const setAvatarEditor = (node) => {
    console.log(node);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Welcome {user.name}</Text>
      <Text style={styles.marginTop}>Avatar:</Text>
      <Avatar
        size="large"
        onPress={() => handleChoosePhoto()}
        source={{ uri: user.avatar }}
      >
        <Avatar.Accessory size={20} />
      </Avatar>
      {avatar === true && (
        <AvatarPicker
          handleChange={handleChange}
          previewImage={previewImage}
          handleCropImage={handleCropImage}
          croppedImage={croppedImage}
          uploadCroppedImage={uploadCroppedImage}
          setAvatarEditor={setAvatarEditor}
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
