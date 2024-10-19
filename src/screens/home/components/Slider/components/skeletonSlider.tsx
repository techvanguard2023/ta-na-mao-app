import React from "react";
import Colors from "../../../../../Utils/Colors";
import ContentLoader, {Circle, Rect} from "react-content-loader/native";

export default function SkeletonSlider() {
    return (
        <ContentLoader
            height={150}
            width={'100%'}
            speed={1}
            viewBox={`0 0 100 40`}
            backgroundColor={Colors.LIGHT_GRAY}
            foregroundColor={Colors.GRAY}
        >
            <Rect x={'0'} y={'0'} rx={'0'} ry={'0'} width={'100%'} height={150}/>
        </ContentLoader>
    )
}
