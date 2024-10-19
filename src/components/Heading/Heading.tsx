import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {headingStyle} from "./styles"
import {headingTypes} from "./types";
import {useNavigation} from "@react-navigation/native";
import SkeletonHeading from "./components/skeletonHeading";

export default function Heading({text, isViewAll=false, viewAllLink, isLoading}: headingTypes) {
    const navigation = useNavigation()

    return (
        <View style={headingStyle.container}>
            {
                isLoading ? (
                    <SkeletonHeading />
                ) : (
                    <>
                        <Text style={headingStyle.heading}>{text}</Text>
                        { isViewAll &&
                            <TouchableOpacity onPress={() => navigation.push(viewAllLink)}>
                                <Text style={headingStyle.seeAll}>
                                    Ver todas
                                </Text>
                            </TouchableOpacity>
                        }
                    </>

                )
            }


        </View>
    )
}
