import Entypo from "@expo/vector-icons/Entypo";
import { Image, ScrollView, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge";
import { useGetPartnerById } from "./hooks/usePartnerById";
import { styles } from "./styles";

export default function PartnerScreen({ route }: any) {
  const partnerId = route.params.partner;

  const { data, isLoading } = useGetPartnerById(partnerId);

  return (
    <ScrollView>
      <View style={styles.containerImageProfile}>
        <Image style={styles.image} source={{ uri: data?.image?.url }} />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.partnerName}>{data?.name}</Text>
        <Text style={styles.partnerPhone}>{data?.contact}</Text>
        <View style={styles.containerLocation}>
          <Entypo name="location-pin" size={16} color={Colors.PRIMARY} />
          <Text style={styles.partnerLocation}>{data?.location}</Text>
        </View>
        <CategoryBadge categoryName={data?.category?.name} />
        <Text>{data?.isActive}</Text>
        <Text>{data?.createdAt}</Text>
        <Text>{data?.description}</Text>
      </View>
    </ScrollView>
  );
}
