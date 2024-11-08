import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  userContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: Colors.BLACK,
  },
  imageUser: {
    width: 90,
    height: 90,
    borderRadius: 99,
  },
  fullNameUser: {
    fontSize: 26,
    color: Colors.BLACK,
    marginTop: 8,
  },
  email: {
    fontSize: 16,
    color: Colors.BLACK,
    marginTop: 3,
  },
  itensContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
  },
  itensName: {
    fontSize: 20,
  },
});
