import React from "react";
import { FlatList, View } from "react-native";
import Heading from "../../../../components/Heading/Heading";
import { usePartnerList } from "./hooks/usePartnerList";
import PartnerListItemSmall from "./PartnerListItemSmall";

export default function PartnerList() {
  const { data, isLoading } = usePartnerList();

  console.log(data);

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Mais Procurados"} isLoading={isLoading} />
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <PartnerListItemSmall partner={item} isLoading={isLoading} />
          </View>
        )}
      />
    </View>
  );
}
