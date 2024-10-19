import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  userContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    color: Colors.BLACK,
  },
  imageUser: {
    width: 90,
    height: 90,
    borderRadius: 99,
  },
  fullNameUser: {
    fontSize: 26,
    fontFamily: "outfit-medium",
    color: Colors.BLACK,
    marginTop: 8,
  },
  email: {
    fontSize: 16,
    fontFamily: "outfit",
    color: Colors.BLACK,
    marginTop: 3,
  },
  itensContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
    paddingLeft: 20,
  },
  itensName: {
    fontSize: 20,
    fontFamily: "outfit",
  },
});
