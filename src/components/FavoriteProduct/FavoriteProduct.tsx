import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import {styles} from "./styles";

export default function FavoriteProduct({productId}): any {
    const [favorited, setFavorited] = useState(false)

    function favoriteProduct() {
        setFavorited(!favorited)
        console.log(productId)
    }

    return (
        <>
            <TouchableOpacity onPress={() => favoriteProduct()}>
                <MaterialIcons name={favorited ? 'favorite-border' : 'favorite'} size={24} color={Colors.PRIMARY} style={styles.favoriteIcon}/>
            </TouchableOpacity>
        </>
    )
}
