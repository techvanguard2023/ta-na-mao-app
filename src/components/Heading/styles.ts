import {StyleSheet} from "react-native";

export const headingStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    heading: {
        fontFamily: 'outfit-bold',
        fontSize: 18,
        marginBottom: 10
    },
    seeAll: {
        fontFamily: 'outfit',
        fontSize: 14
    }
})
