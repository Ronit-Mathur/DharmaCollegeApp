import React, { Component } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { withNavigation } from "@react-navigation/native";

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <Text style={styles.header}>Welcome To Mindful Living</Text>
        <View style={styles.bottom}>
          <Button
            onPress={() => this.props.navigation.navigate("Home")}
            title="Register/Login"
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 35,
  },
  bottom: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header: {
    fontFamily: "HelveticaNeue",
    fontSize: 30,
    fontWeight: "200",
  },
  logo: {
    height: 50,
    width: 250,
  },
  top: {
    justifyContent: "flex-start",
  },
});
