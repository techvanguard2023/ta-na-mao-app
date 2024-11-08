import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  containerImageProfile: {
    width: "100%",
    height: 250,
    backgroundColor: Colors.WHITE,
    alignSelf: "center",
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
    top: -20,
    gap: 10,
  },
  containerNameAndFavirite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  partnerName: {
    fontSize: 25,
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
  sessionDetails: {
    flexDirection: "column",
    gap: 15,
    marginBottom: 20,
  },
  sessionDetailsTitle: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  sessionDetailsText: {
    fontSize: 16,
    color: Colors.GRAY,
  },
  buttom: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttomText: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});
