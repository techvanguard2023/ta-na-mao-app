import { StyleSheet } from "react-native";
import Colors from "../../../../Utils/Colors";

export const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.LIGHT_GRAY,
    objectFit: "contain",
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    alignItems: "flex-start",
  },
  categoryItem: {
    width: "30%",
    alignItems: "center",
  },
});
