import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import React, { Component, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioPlaylist: this.props.audioPlaylist,
      isPlaying: false,
      playbackInstance: null,
      currentIndex: this.props.currentIndex,
      volume: 1.0,
      isBuffering: false,
    };
  }
  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true,
      });
      this.loadAudio();
    } catch (e) {
      console.log(e);
    }
  }

  // Load Audio into Sound from current index in state
  async loadAudio() {
    const { currentIndex, isPlaying, volume } = this.state;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: this.props.audioPlaylist[currentIndex].uri,
      };

      const status = {
        shouldPlay: isPlaying,
        volume,
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({ playbackInstance });
    } catch (e) {
      console.log(e);
    }
  }
  // Play / Pause handling (Necessary)
  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  // Prev handling (Unnecessary)
  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentIndex < this.props.audioPlaylist.length - 1
        ? (currentIndex -= 1)
        : (currentIndex = 0);
      this.setState({
        currentIndex,
      });
      this.loadAudio();
    }
  };

  // Next handling (Unnecessary)
  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentIndex < this.props.audioPlaylist.length - 1
        ? (currentIndex += 1)
        : (currentIndex = 0);
      this.setState({
        currentIndex,
      });
      this.loadAudio();
    }
  };

  handleTrackChange = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();

      this.setState({
        currentIndex,
      });
      this.loadAudio();
    }
  };
  onPlaybackStatusUpdate = (status) => {
    this.setState({
      isBuffering: status.isBuffering,
    });
  };

  // Renders info of file that is displayed with the player
  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state;
    return playbackInstance ? (
      <View style={styles.trackInfo}>
        <Text style={[styles.trackInfoText, styles.largeText]}>
          {this.props.audioPlaylist[currentIndex].title}
        </Text>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          {this.props.audioPlaylist[currentIndex].author}
        </Text>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          {this.props.audioPlaylist[currentIndex].source}
        </Text>
      </View>
    ) : null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderFileInfo()}
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.control}
            // onPress={this.handlePreviousTrack} // TODO PRESSING PREVIOUS TRACK MESSES UP WHEN ON FIRST OBJECT -- FIX BEFORE ENABLING
          >
            <Ionicons name="ios-play-skip-back-circle" size={48} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handlePlayPause}
          >
            {this.state.isPlaying ? (
              <Ionicons name="ios-pause" size={48} color="#444" />
            ) : (
              <Ionicons name="ios-play-circle" size={48} color="#444" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handleNextTrack}
          >
            <Ionicons
              name="ios-play-skip-forward-circle"
              size={48}
              color="#444"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  controls: {
    flexDirection: "row",
  },
  control: {
    margin: 20,
  },
  trackInfo: {
    padding: 40,
    backgroundColor: "#fff",
  },
  trackInfoText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "#550088",
  },
  largeText: {
    fontSize: 22,
  },
  smallText: {
    fontSize: 16,
  },
});

// const this.this.props.audioPlaylist = [
//   {
//     title: "Day 1 - Silence, Clarity, and Ease",
//     author: "Skillful Means",
//     source: "",
//     uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Breath+Ex+A+Silence%2C+Clairty%2C+Ease+MSW_1.aif",
//     imageSource: "",
//   },
//   {
//     title: "Day 2",
//     author: "",
//     source: "",
//     uri: "https://dharmacollegetest.s3.us-west-1.amazonaws.com/Day+2+Exercise+2.aif",
//     imageSource: "",
//   },
//   {
//     title: "Hamlet - Act III",
//     author: "TEST AUDIO",
//     source: "",
//     uri: "http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3",
//     imageSource:
//       "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
//   },
//   {
//     title: "Hamlet - Act IV",
//     author: "TEST AUDIO",
//     source: "",
//     uri: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3",
//     imageSource:
//       "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
//   },
//   {
//     title: "Hamlet - Act V",
//     author: "TEST AUDIO",
//     source: "",
//     uri: "https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3",
//     imageSource:
//       "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
//   },
// ];
