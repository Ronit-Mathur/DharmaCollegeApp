import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import SMCourseList from "../components/SMCourseList";
import { withNavigation } from "@react-navigation/native";
import AudioPlayer from "../components/AudioPlayer";

export default class SkillfulMeans extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Skillful Means </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Back to Home"
          style={styles.header}
        ></Button>
        <SMCourseList></SMCourseList>
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
