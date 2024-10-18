import { NavigationContainer } from "@react-navigation/native";
import "./gesture-handler";
import StackNavigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
