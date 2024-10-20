import { Text, View } from "react-native";
import ContainerDefaultInternoComponent from "../../components/containerDefaultInterno";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import Colors from "../../Utils/Colors";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <Header />
      <ContainerDefaultInternoComponent>
        <Slider />
        <HorizontalLine />
        <Text>Home</Text>
      </ContainerDefaultInternoComponent>
    </View>
  );
}
