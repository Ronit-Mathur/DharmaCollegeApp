import React, { useState } from "react";
import {
  Component,
  FlatList,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import AudioPlayer from "./AudioPlayer";

const DATA = [
  {
    id: "0",
    title: "Day 1", // TODO Add course name and implement
    url: "",
    uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Breath+Ex+A+Silence%2C+Clairty%2C+Ease+MSW_1.aif",
  },
  {
    id: "1",
    title: "Day 2",
    uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Breath+Ex+A+Silence%2C+Clairty%2C+Ease+MSW_1.aif",
  },
  {
    id: "2",
    title: "Day 3",
    uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Breath+Ex+A+Silence%2C+Clairty%2C+Ease+MSW_1.aif",
  },
  {
    id: "3",
    title: "Day 4",
    uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Breath+Ex+A+Silence%2C+Clairty%2C+Ease+MSW_1.aif",
  },
  {
    id: "4",
    title: "Day 5",
    uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Breath+Ex+A+Silence%2C+Clairty%2C+Ease+MSW_1.aif",
  },
  {
    id: "5",
    title: "Day 6",
    uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Breath+Ex+A+Silence%2C+Clairty%2C+Ease+MSW_1.aif",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
//let selectedIndex = 0;

export default class SMCourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSelectedId: 0,
      playerSelectedIndex: 0,
      //Need to change all instances of id or index changes to state format
    };
  }

  async renderItem({ item }) {
    const backgroundColor = item.id === selectedId ? "#D4A82F" : "#F2D535";
    const color = item.id === selectedId ? "white" : "black";
    return (
      <Item
        item={item}
        onPress={() => {
          this.state.listSelectedId = item.id;
          this.state.playerSelectedIndex = item.index - 1;
          console.log("Player Index: " + this.state.playerSelectedIndex);
          console.log("List Index = " + this.state.listSelectedId);
          //setSelectedId(item.id);
          //setSelectedIndex(item.index); // This should set index of audio player
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  }
  async ComponentDidMount() {
    try {
      AudioPlayer.handleTrackChange; // ?
      // Audio player handlechange?
      // Change to on component refresh
    } catch (e) {
      console.log(e);
    }
  }
  //async SMCourseList() {
  //const [selectedId, setSelectedId] = useState(null);
  //const [selectedIndex, setSelectedIndex] = useState(0);
  //}

  render() {
    return (
      <SafeAreaView style={styles.SMCourseListContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={this.state.listSelectedId}
        />
        <AudioPlayer
          audioPlaylist={DATA}
          currentIndex={this.state.playerSelectedIndex}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  SMCourseListContainer: {
    flex: 1,
    width: 350, // TODO Make dynamic width
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 35,
  },
});
