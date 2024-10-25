import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../../../Utils/Colors";
import SkeletonHeader from "./components/skeletonHeader";
import { useCustomer } from "./hooks/useCustomer";
import { useGetCustomer } from "./hooks/useGetCustomer";
import { styles } from "./styles";

export default function Header() {
  const { user } = useUser();
  const navigation = useNavigation();
  const [hasNotification] = useState(true);
  const customerId: any = user?.id;
  const { data, isLoading } = useGetCustomer(customerId);
  const { mutateAsync: saveCustomer } = useCustomer();

  console.log("Data:", data);

  const checkIfExistCustomer = async () => {
    if (Array.isArray(data)) {
      const customerExists = data.some((item) => item.customerId === user?.id);
      if (customerExists) {
        console.log("Cliente já existe");
        return true;
      } else {
        console.log("Cliente não existe");
        handleSaveCustomer();
      }
    } else if (data?.customerId === user?.id) {
      console.log("Cliente já existe");
      return true;
    } else {
      console.log("Cliente não existe");
      handleSaveCustomer();
    }
  };

  const newUserData = {
    customerId: user?.id,
    fullName: user?.fullName,
    email: user?.primaryEmailAddress?.emailAddress,
  };

  const handleSaveCustomer = async () => {
    try {
      await saveCustomer(newUserData);
    } catch (error: any) {
      console.log(
        "Erro ao salvar cliente:",
        error.response || error.message || error
      );
    }
  };

  useEffect(() => {
    if (user) {
      checkIfExistCustomer();
    }
  }, [user, data]);

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            {isLoading ? (
              <SkeletonHeader />
            ) : (
              <>
                <Image
                  source={{ uri: user?.imageUrl }}
                  style={styles.userImage}
                />
                <View>
                  <Text style={styles.greeting}>Olá,</Text>
                  <Text style={styles.userName}>{user?.fullName}</Text>
                </View>
              </>
            )}
          </View>
          <View style={styles.containerNotification}>
            <>
              <View style={styles.notification}>
                <Text style={styles.notificationText}>1</Text>
              </View>
              {hasNotification ? (
                <TouchableOpacity
                  onPress={() => {
                    // @ts-ignore
                    navigation.navigate("ProfileScreen");
                  }}
                >
                  <MaterialIcons
                    name="notifications-active"
                    size={27}
                    color={Colors.WHITE}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    // @ts-ignore
                    navigation.navigate("ProfileScreen");
                  }}
                >
                  <MaterialIcons
                    name="notifications"
                    size={27}
                    color={Colors.WHITE}
                  />
                </TouchableOpacity>
              )}
            </>
          </View>
        </View>
      )}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Pesquisar" style={styles.textInput} />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome name="search" size={24} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
