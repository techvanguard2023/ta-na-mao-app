import { ScrollView } from "react-native";
import ContainerDefaultInternoComponent from "../../components/containerDefaultInterno";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import Colors from "../../Utils/Colors";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PartnerList from "./components/PartnerList/PartnerList";
import Slider from "./components/Slider/Slider";

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <Header />
      <ContainerDefaultInternoComponent>
        <Slider />
        <Categories />
        <HorizontalLine />
        <PartnerList />
      </ContainerDefaultInternoComponent>
    </ScrollView>
  );
}
