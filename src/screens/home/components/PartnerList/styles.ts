import { StyleSheet } from "react-native";
import Colors from "../../../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
    height: 270,
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
    fontSize: 16,
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
  containerLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
  },
  containerRate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  location: {
    fontSize: 12,
    fontFamily: "outfit",
  },
});
