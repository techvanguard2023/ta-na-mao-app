import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CategoryBadge from "../../../../components/CategoryBadge/CategoryBadge";
import FavoriteProduct from "../../../../components/FavoriteProduct/FavoriteProduct";
import SkeletonPartnerList from "./components/skeletonPartnerList";
import { styles } from "./styles";

export default function PartnerListItemSmall({ partner, isLoading }): any {
  return (
    <TouchableOpacity style={styles.container}>
      {isLoading ? (
        <SkeletonPartnerList />
      ) : (
        <>
          <Image source={{ uri: partner?.image?.url }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{partner?.name}</Text>

            <View style={styles.subContainer}>
              <CategoryBadge categoryName={partner?.category?.name} />
              <FavoriteProduct productId={partner?.id} />
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
