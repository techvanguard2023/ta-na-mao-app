import { StyleSheet } from "react-native";
import Colors from "../../../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greeting: {
    color: Colors.WHITE,
  },
  userName: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  containerNotification: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: Colors.GRAY,
    padding: 5,
    borderRadius: 99,
  },
  notification: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 99,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  notificationText: {
    color: Colors.WHITE,
    fontSize: 8,
    textAlign: "center",
  },
});
