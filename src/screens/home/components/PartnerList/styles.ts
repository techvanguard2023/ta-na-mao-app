import { StyleSheet } from "react-native";
import Colors from "../../../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    height: 240,
  },
  infoContainer: {
    padding: 7,
    display: "flex",
    gap: 3,
  },
  image: {
    minWidth: 160,
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  name: {
    fontSize: 17,
    fontFamily: "outfit-medium",
  },
  price: {
    fontSize: 13,
    fontFamily: "outfit",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});