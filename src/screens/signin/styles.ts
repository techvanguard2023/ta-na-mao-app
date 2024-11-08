import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    flexDirection: "row",
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 17,
    color: Colors.GRAY,
    textAlign: "center",
  },
  containerTitle: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 44,
    fontFamily: "LibreBaskerville_700Bold",
    alignSelf: "flex-start",
    marginLeft: 65,
    color: Colors.WHITE,
  },
  subTitle: {
    fontSize: 44,
    fontFamily: "LibreBaskerville_700Bold",
    alignSelf: "flex-end",
    marginRight: 65,
    color: Colors.WHITE,
  },
  containerCentral: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
  },
  splash: {
    width: 250,
    height: 250,
  },
});
