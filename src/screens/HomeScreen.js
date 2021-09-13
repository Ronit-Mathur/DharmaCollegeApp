import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import BottomNav from "../components/BottomNav";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> HomePage </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Splash")}
          title="Back to SplashScreen"
          style={styles.header}
        ></Button>
        <Button
          onPress={() => this.props.navigation.navigate("SkillfulMeans")}
          title="Skillfull Means Course"
          style={styles.header}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 35,
  },
  header: {
    fontFamily: "HelveticaNeue",
    fontSize: 30,
    fontWeight: "200",
  },
});
