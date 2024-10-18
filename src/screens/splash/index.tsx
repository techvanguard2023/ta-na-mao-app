import { Text, View } from "react-native";
import { styles } from "./styles";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash Screen</Text>
    </View>
  );
}
