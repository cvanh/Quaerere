import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import Settings from "./screens/Settings/Setting.jsx";
import Friends from "./screens/Friends/Friends.jsx";
import { View, Text, SafeAreaView, StatusBar} from "react-native";
import { LoginScreen, RegistrationScreen } from "./screens/Authentication";
import { encode, decode } from "base-64";
import firebase from "./firebase/config.js";
import {
  Appearance,
  AppearanceProvider,
  useColorScheme,
} from "react-native-appearance";
import Ionicons from "@expo/vector-icons/Ionicons";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function AppContainer() {
  return (
    <AppearanceProvider>
      <App />
    </AppearanceProvider>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const usersRef = firebase.database().ref("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        addListener(user);
      } else {
        setLoading(false);
      }
    });
    const colorScheme = Appearance.getColorScheme();
    setTheme(colorScheme);
  }, []);

  //This Section of the code will see what colorscheme the users' device is
  //using

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
  const HomeTabs = (theme) => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Friends") {
              iconName = focused ? "body-outline" : "body-outline";
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
        <Tab.Screen
          name="Home"
          children={() => <HomeScreen {...user} theme={theme} />}
        />
        <Tab.Screen name="Settings" children={() => <Settings {...user} />} />
        <Tab.Screen name="Friends" children={() => <Friends {...user} />} />
      </Tab.Navigator>
    );
  };
  return (
    <AppearanceProvider>
        <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen"  headerStyle={navigationOptions}
          >
          {user ? (
            <Stack.Screen name="App" children={() => HomeTabs(theme)} />
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
