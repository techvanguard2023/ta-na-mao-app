import { useFocusEffect, useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useCallback } from "react";
import { Image, Text, View } from "react-native";
import ContainerDefaultComponent from "../../components/containerDefault";
import { styles } from "./styles";

export default function SplashScreen() {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        // @ts-ignore
        navigation.navigate("VerifyScreen");
      }, 4100);
    }, [])
  );

  return (
    <ContainerDefaultComponent>
      <View style={styles.containerImage}>
        <Image
          source={require("../../assets/images/camada.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Ta na</Text>
        <Text style={styles.subTitle}>Mão</Text>
      </View>
      <View style={styles.containerLogo}>
        <LottieView
          style={styles.splash}
          source={require("../../assets/lottie/handshake-animation-splash.json")}
          autoPlay
          loop={false}
        />
      </View>
    </ContainerDefaultComponent>
  );
}
