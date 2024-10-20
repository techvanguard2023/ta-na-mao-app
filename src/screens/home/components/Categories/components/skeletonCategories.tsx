import React from "react";
import Colors from "../../../../../Utils/Colors";
import ContentLoader, {Circle} from "react-content-loader/native";

export default function SkeletonCategories() {
    return (
        <ContentLoader
            height={90}
            width={'100%'}
            speed={1}
            viewBox={`10 0 100 30`}
            backgroundColor={Colors.LIGHT_GRAY}
            foregroundColor={Colors.GRAY}
        >
            <Circle cx={'20'} cy={'12'} r={'12'} />
            <Circle cx={'47'} cy={'12'} r={'12'} />
            <Circle cx={'75'} cy={'12'} r={'12'} />
            <Circle cx={'102'} cy={'12'} r={'12'} />
        </ContentLoader>
    )
}
