import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ContainerDefaultComponent from "../../components/containerDefault";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { styles } from "./styles";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
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
      <Text>Sign In</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text
          style={{
            fontSize: 17,
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Vamos começar
        </Text>
      </TouchableOpacity>
    </ContainerDefaultComponent>
  );
}
