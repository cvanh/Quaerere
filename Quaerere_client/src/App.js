import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import {View, Text} from 'react-native'
import { LoginScreen, RegistrationScreen } from "./screens/Authentication";
import { encode, decode } from "base-64";
import firebase from "./firebase/config.js";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}



const Tab = createBottomTabNavigator();

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

  //This function will look for the users data in the database and make it
  //available throughout our app.
  const addListener = async (user) => {
    const id = user.uid;
    firebase
      .database()
      .ref(`users/${id}`)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          setUser(snapshot.val());
          setLoading(false);
        }
      });
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {user ? (
          <Tab.Screen name="Home"> 
            {(props) => <HomeScreen {...user} />}
          </Tab.Screen> 
        ) : (
          <>
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
    
  );

}
