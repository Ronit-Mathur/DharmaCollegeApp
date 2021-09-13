import React, { useState } from "react";
import {
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

let selectedIndex = 0;

const SMCourseList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#D4A82F" : "#F2D535";
    const color = item.id === selectedId ? "white" : "black";
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setSelectedIndex(item.index);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.SMCourseListContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <AudioPlayer audioPlaylist={DATA} currentIndex={selectedIndex} />
    </SafeAreaView>
  );
};

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

export default SMCourseList;
