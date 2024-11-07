import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  CategoryScreen,
  HomeScreen,
  NotificationScreen,
  PartnerScreen,
} from "../screens";
import ProfileScreen from "../screens/profile";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="PartnerScreen" component={PartnerScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
