import { Text, View } from "react-native";
import ContainerDefaultInternoComponent from "../../components/containerDefaultInterno";
import Colors from "../../Utils/Colors";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <Header />
      <ContainerDefaultInternoComponent>
        <Slider />
        <Text>Home</Text>
      </ContainerDefaultInternoComponent>
    </View>
  );
}
