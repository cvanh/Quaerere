import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import { LoginScreen, RegistrationScreen } from "./screens/Authentication";
import { encode, decode } from "base-64";
import firebase from "./firebase/config.js";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.database().ref("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        addListener(user);
      } else {
        setLoading(false);
      }
    });
  }, []);
  const addListener = async (user) => {
    const id = user.uid;
    firebase
      .database()
      .ref(`users/${id}`)
      .on("value", (snapshot) => {
        console.log(snapshot.val())
        if (snapshot.val()) {
          setUser(snapshot.val());
          setLoading(false);
        }
      });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
