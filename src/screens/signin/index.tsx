import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import ContainerDefaultComponent from "../../components/containerDefault";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { styles } from "./styles";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  useWarmUpBrowser();

  const [showButton, setShowButton] = useState(false);
  const animationRef = useRef(null);

  // Inicia a lógica para mostrar o botão após 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Exibe o botão após 4 segundos
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        // @ts-ignore
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <ContainerDefaultComponent>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Ta na</Text>
        <Text style={styles.subTitle}>Mão</Text>
      </View>
      <View style={styles.containerCentral}>
        {!showButton ? (
          <Animatable.View
            animation={showButton ? "fadeOut" : undefined}
            duration={1000}
          >
            {/* <LottieView
              ref={animationRef}
              style={styles.splash}
              source={require("../../assets/lottie/handshake-animation-splash.json")}
              autoPlay
              loop={false}
            /> */}
          </Animatable.View>
        ) : (
          <Animatable.View animation="fadeIn" duration={1000}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <Image
                source={require("../../assets/images/g-google.png")}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>Continue com Google</Text>
            </TouchableOpacity>
          </Animatable.View>
        )}
      </View>
    </ContainerDefaultComponent>
  );
}
