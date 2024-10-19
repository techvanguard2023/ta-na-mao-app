import React from "react";
import ContentLoader, {Circle, Rect} from "react-content-loader/native";
import Colors from "../../../Utils/Colors";

export default function SkeletonHeading() {
    return (
        <ContentLoader
            height={45}
            width={'100%'}
            speed={1}
            viewBox={`28 0 100 30`}
            backgroundColor={Colors.LIGHT_GRAY}
            foregroundColor={Colors.GRAY}
        >
            <Rect x={'0'} y={'5'} rx={'4'} ry={'4'} width={60} height={12}/>
            <Rect x={'190'} y={'5'} rx={'4'} ry={'4'} width={40} height={12}/>
        </ContentLoader>
    )
}
