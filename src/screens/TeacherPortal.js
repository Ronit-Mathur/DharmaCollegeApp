import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class TeacherPortal extends Component {
  render() {
    return <View style={styles.container}></View>;
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
