import { useUser } from "@clerk/clerk-react";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Colors from "../../Utils/Colors";
import { useFavorite } from "./hook/useFavorite";
import { styles } from "./styles";

export default function FavoritePartner(partnerId: any) {
  const [favorited, setFavorited] = useState(false);
  const { user } = useUser();
  const customerId: any = user?.id;
  const { mutateAsync: saveFavorite } = useFavorite();

  async function favoritePartner() {
    if (customerId && partnerId) {
      setFavorited(true);
      handleSaveFavorite();
    }
  }

  async function handleSaveFavorite() {
    const newFavoriteData = {
      customerId: user?.id,
      partnerId: partnerId,
    };

    try {
      await saveFavorite(newFavoriteData);
    } catch (error: any) {
      console.log(
        "Erro ao salvar favorito:",
        error.response || error.message || error
      );
    }
  }

  return (
    <>
      <TouchableOpacity onPress={() => favoritePartner()}>
        <MaterialIcons
          name={favorited ? "favorite-border" : "favorite"}
          size={24}
          color={Colors.PRIMARY}
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </>
  );
}
