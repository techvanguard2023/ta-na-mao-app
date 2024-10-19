import React from "react";
import { FlatList, Image, useWindowDimensions, View } from "react-native";
import Heading from "../../../../components/Heading/Heading";
import SkeletonSlider from "./components/skeletonSlider";
import { useSlider } from "./hooks/userSlider";
import { styles } from "./styles";

export default function Slider() {
  const { width, height } = useWindowDimensions();
  const { data } = useSlider();
  const sliders = useSlider();

  return (
    <View>
      <Heading text={"Principais Promoções"} isLoading={sliders.isLoading} />
      {sliders.isLoading ? (
        <SkeletonSlider />
      ) : (
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) =>
            item.isActive && (
              <View style={styles.sliderContainerImage} key={index}>
                <Image
                  source={{ uri: item?.image?.url }}
                  style={styles.sliderImage}
                />
              </View>
            )
          }
        />
      )}
    </View>
  );
}
