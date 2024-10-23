import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";

export default function Rate({ rateValue }: any) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <AntDesign
          key={i}
          name={i <= rateValue ? "star" : "staro"}
          size={14}
          color="gold"
        />
      );
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {renderStars()}
    </View>
  );
}
