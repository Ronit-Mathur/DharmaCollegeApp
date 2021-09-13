import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { Component } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SplashScreen from "../screens/SplashScreen";
//import HomeScreen from "../screens/HomeScreen";
import SkillfulMeans from "../screens/SkillfulMeans";

const Tab = createMaterialBottomTabNavigator();

export default class BottomNav extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Course"
          component={SkillfulMeans}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
