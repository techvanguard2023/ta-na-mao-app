import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { ProfileScreen } from "../screens";
import NotificationScreen from "../screens/notification";
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
        name="home"
        component={HomeNavigation}
        options={{
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: () => (
            <Text style={styles.tabBarLabel}>Notificações</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
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
  },
});
