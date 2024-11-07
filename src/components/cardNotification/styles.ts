import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: Colors.PRIMARY_LIGHT,
    width: "100%",
    height: "auto",
    minHeight: 80,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  title: {
    color: Colors.BLACK,
    fontWeight: "bold",
  },
  date: {
    color: Colors.GRAY,
  },
  message: {
    color: Colors.BLACK,
    fontStyle: "italic",
  },
});
