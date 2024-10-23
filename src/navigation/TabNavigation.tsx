import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { ProfileScreen, SearchScreen } from "../screens";
import Colors from "../Utils/Colors";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={SearchScreen}
        options={{
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Favoritos</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Perfil</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    color: Colors.PRIMARY,
    fontSize: 12,
    marginTop: -7,
    fontFamily: "outfit",
  },
});
