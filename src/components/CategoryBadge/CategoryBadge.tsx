import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

export default function CategoryBadge({ categoryName }): any {
  return <Text style={styles.category}>{categoryName}</Text>;
}
