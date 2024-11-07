import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CategoryBadge from "../../../../components/CategoryBadge/CategoryBadge";
import Rate from "../../../../components/Rate";
import Colors from "../../../../Utils/Colors";
import SkeletonPartnerList from "./components/skeletonPartnerList";
import { styles } from "./styles";

export default function PartnerListItemSmall({ partner, isLoading }): any {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.push("PartnerScreen", {
          partner: partner.id,
        })
      }
    >
      {isLoading ? (
        <SkeletonPartnerList />
      ) : (
        <>
          <Image source={{ uri: partner?.image?.url }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{partner?.name}</Text>

            <View style={styles.subContainer}>
              <CategoryBadge categoryName={partner?.category?.name} />
            </View>
            <View style={styles.containerLocation}>
              <Entypo name="location-pin" size={16} color={Colors.PRIMARY} />
              <Text style={styles.location}>{partner?.location}</Text>
            </View>
            <View style={styles.containerRate}>
              <Rate rateValue={partner?.rate} />
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
