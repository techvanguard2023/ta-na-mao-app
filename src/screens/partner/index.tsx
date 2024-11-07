import Entypo from "@expo/vector-icons/Entypo";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryBadge from "../../components/CategoryBadge/CategoryBadge";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import Rate from "../../components/Rate";
import { useGetPartnerById } from "./hooks/usePartnerById";
import { styles } from "./styles";

export default function PartnerScreen({ route }: any) {
  const partnerId = route.params.partner;

  const { data, isLoading } = useGetPartnerById(partnerId);
  const whatsapp: string = data?.contact;
  const textWhatsapp: string = "Olá, gostaria de solicitar um orçamento.";

  async function whatsApp() {
    try {
      const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        textWhatsapp
      )}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error("URL não suportada para abrir o WhatsApp");
      }
    } catch (e) {
      console.error("Erro ao tentar abrir o WhatsApp", e);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImageProfile}>
        <Image style={styles.image} source={{ uri: data?.image?.url }} />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerNameAndFavirite}>
          <Text style={styles.partnerName}>{data?.name}</Text>
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
        <TouchableOpacity style={styles.buttom} onPress={whatsApp}>
          <Text style={styles.buttomText}>Solicitar orçamento</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
