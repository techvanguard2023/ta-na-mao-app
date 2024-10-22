import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, View } from "react-native";
import Heading from "../../../../components/Heading/Heading";
import SkeletonSlider from "./components/skeletonSlider";
import { useSlider } from "./hooks/userSlider";
import { styles } from "./styles";

export default function Slider() {
  const { data } = useSlider();
  const sliders = useSlider();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!sliders.isLoading && data?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000); // scroll every 3 seconds

      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, [data, sliders.isLoading]);

  useEffect(() => {
    if (flatListRef.current && data?.length > 0) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex, data]);

  return (
    <View>
      <Heading text={"Principais Promoções"} isLoading={sliders.isLoading} />
      {sliders.isLoading ? (
        <SkeletonSlider />
      ) : (
        <FlatList
          ref={flatListRef}
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
