import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen, PartnerScreen } from "../screens";
import SearchScreen from "../screens/favorite";
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
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="PartnerScreen" component={PartnerScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
