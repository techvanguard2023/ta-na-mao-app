import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../../../Utils/Colors";
import SkeletonHeader from "./components/skeletonHeader";
import { styles } from "./styles";

export default function Header() {
  const { user, isLoading } = useUser();
  const navigation = useNavigation();
  const [hasNotification, setHasNotification] = React.useState(true);

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
