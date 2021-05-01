import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import Settings from "./screens/Settings/Setting.jsx";
import { View, Text } from "react-native";
import { LoginScreen, RegistrationScreen } from "./screens/Authentication";
import { encode, decode } from "base-64";
import firebase from "./firebase/config.js";
import Ionicons from "@expo/vector-icons/Ionicons";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();
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
    await firebase
      .database()
      .ref(`users/${id}`)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          setUser(snapshot.val());
          setLoading(false);
        }
      });
  };

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" children={() => <HomeScreen {...user} />} />
        <Tab.Screen name="Settings" children={() => <Settings {...user} />} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeTabs} />
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
