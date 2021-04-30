import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
// import {overview_card} from './components.js';



// dit wordt de pagina's zelf

const Home = () => <Text style={styles.header}>hou de ntag21x kaart voor de telefoon</Text>; 

const overview = () => <Text style={styles.header}>overview page</Text>;

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/overview"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>overview</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/overview" component={overview} />
    </View>
  </NativeRouter>
);


// styles
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20,
    textAlign: "center",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

AppRegistry.registerComponent("main", () => App); 
