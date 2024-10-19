import { View } from "react-native";
import { styles } from "./styles";
import { ContainerTypes } from "./types";

export default function ContainerDefaultComponent({
  children,
}: ContainerTypes) {
  return <View style={styles.container}>{children}</View>;
}
