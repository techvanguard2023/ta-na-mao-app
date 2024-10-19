import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 44,
    fontFamily: "BalsamiqSans_700Bold",
    alignSelf: "flex-start",
    marginLeft: 65,
  },
  subTitle: {
    fontSize: 44,
    fontFamily: "BalsamiqSans_700Bold",
    alignSelf: "flex-end",
    marginRight: 65,
  },
  containerLogo: {
    width: "100%",
    alignItems: "center",
  },
  containerImage: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  image: {
    width: "100%",
    height: 250,
    objectFit: "cover",
  },
  splash: {
    width: 250,
    height: 250,
  },
});
