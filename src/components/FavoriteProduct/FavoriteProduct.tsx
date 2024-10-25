import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Colors from "../../Utils/Colors";
import { styles } from "./styles";

export default function FavoritePartner({ partnerId }): any {
  const [favorited, setFavorited] = useState(false);

  function favoritePartner() {
    setFavorited(!favorited);
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
