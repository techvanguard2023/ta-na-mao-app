import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  containerImageProfile: {
    width: "100%",
    height: 250,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    alignSelf: "center",
    position: "relative",
    top: -2,
  },
  image: {
    width: "100%",
    height: 350,
  },
  containerInfo: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.WHITE,
    position: "relative",
    top: -20,
    gap: 10,
  },
  partnerName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  partnerPhone: {
    fontSize: 16,
    color: Colors.GRAY,
  },
  containerLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  partnerLocation: {
    fontSize: 16,
    color: Colors.GRAY,
  },
});
