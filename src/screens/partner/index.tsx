import Entypo from "@expo/vector-icons/Entypo";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge";
import FavoritePartner from "../../components/FavoriteProduct/FavoriteProduct";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import Rate from "../../components/Rate";
import { useGetPartnerById } from "./hooks/usePartnerById";
import { styles } from "./styles";

export default function PartnerScreen({ route }: any) {
  const partnerId = route.params.partner;

  const { data, isLoading } = useGetPartnerById(partnerId);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImageProfile}>
        <Image style={styles.image} source={{ uri: data?.image?.url }} />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerNameAndFavirite}>
          <Text style={styles.partnerName}>{data?.name}</Text>
          <FavoritePartner partnerId={data?.id} />
        </View>

        <Rate rateValue={data?.rate} />

        <Text style={styles.partnerPhone}>{data?.contact}</Text>
        <View style={styles.containerLocation}>
          <Entypo name="location-pin" size={16} color="#4169E1" />
          <Text style={styles.partnerLocation}>{data?.location}</Text>
        </View>
        <CategoryBadge categoryName={data?.category?.name} />
        <HorizontalLine />
        <View style={styles.sessionDetails}>
          <Text style={styles.sessionDetailsTitle}>Sobre o profissional</Text>
          <Text style={styles.sessionDetailsText}>{data?.description}</Text>
        </View>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomText}>Solicitar orçamento</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
