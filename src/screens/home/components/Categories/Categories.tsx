import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Heading from "../../../../components/Heading/Heading";
import SkeletonCategories from "./components/skeletonCategories";
import { useCategories } from "./hooks/useCategories";
import { styles } from "./styles";

interface Category {
  name: string;
  icon: {
    url: string;
  };
}

export default function Categories() {
  const navigation = useNavigation();
  const { data, isLoading } = useCategories();

  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Heading
        text={"Categorias"}
        isViewAll
        viewAllLink={"category-list"}
        isLoading={isLoading}
      />
      {isLoading ? (
        <SkeletonCategories />
      ) : (
        <View style={styles.categoryContainer}>
          {data.map((item: Category, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() =>
                navigation.push("business-list", {
                  category: item.name,
                })
              }
            >
              <Image source={{ uri: item.icon.url }} style={styles.icon} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
