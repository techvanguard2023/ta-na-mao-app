import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import ContainerDefaultInternoComponent from "../../components/containerDefaultInterno";
import Colors from "../../Utils/Colors";
import { styles } from "./styles";

export default function ProfileScreen() {
  const { isLoaded, signOut } = useAuth();
  const navigation = useNavigation();

  const { user } = useUser();

  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      screen: "HomeScreen",
    },
    {
      id: 2,
      name: "Notifications",
      icon: "notifications",
      screen: "NotificationScreen",
    },
    {
      id: 3,
      name: "Logout",
      icon: "log-out",
    },
  ];

  return (
    <ContainerDefaultInternoComponent>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.userContainer}>
          <Image source={{ uri: user?.imageUrl }} style={styles.imageUser} />
          <Text style={styles.fullNameUser}>{user?.fullName}</Text>

          <Text style={styles.email}>
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
        </View>
      </View>
      <View
        style={{ paddingTop: 40, alignItems: "flex-start", height: "100%" }}
      >
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.itensContainer}
              onPress={() =>
                item.name === "Logout"
                  ? signOut()
                  : navigation.navigate(item.screen)
              }
            >
              <Ionicons name={item.icon} size={30} color={Colors.PRIMARY} />
              <Text style={styles.itensName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ContainerDefaultInternoComponent>
  );
}
