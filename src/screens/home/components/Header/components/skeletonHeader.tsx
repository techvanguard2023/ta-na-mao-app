import React from "react";
import Colors from "../../../../../Utils/Colors";
import ContentLoader, {Circle, Rect} from "react-content-loader/native";

export default function SkeletonHeader() {
    return (
        <ContentLoader
            height={45}
            width={'90%'}
            speed={1}
            viewBox={`25 0 100 30`}
            backgroundColor={Colors.LIGHT_GRAY}
            foregroundColor={Colors.GRAY}
        >
            <Circle cx={'20'} cy={'15'} r={'15'} />
            <Rect x={'40'} y={'0'} rx={'4'} ry={'4'} width={50} height={12}/>
            <Rect x={'40'} y={'15'} rx={'4'} ry={'4'} width={90} height={12}/>
        </ContentLoader>
    )
}
