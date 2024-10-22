import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import Colors from "../../../../../Utils/Colors";

export default function SkeletonPartnerList() {
  return (
    <ContentLoader
      height={150}
      width={"100%"}
      speed={1}
      viewBox={`0 0 100 100`}
      backgroundColor={Colors.LIGHT_GRAY}
      foregroundColor={Colors.GRAY}
      style={{ minWidth: 160 }}
    >
      <Rect x={"0"} y={"0"} width={"100%"} height={50} />
      <Rect x={"0"} y={"55"} width={"100%"} height={10} />
      <Rect x={"0"} y={"70"} width={"80%"} height={10} />
      <Rect x={"0"} y={"85"} width={"80%"} height={10} />
    </ContentLoader>
  );
}
