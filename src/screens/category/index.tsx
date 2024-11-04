import { ScrollView, View } from "react-native";
import HeaderComponent from "../../components/header";
import PartnerListItemSmall from "../home/components/PartnerList/PartnerListItemSmall";
import { useCategoryById } from "./hook/useCategoryById";
import { styles } from "./styles";

export default function CategoryScreen({ route }: any) {
  const categoryId = route.params.category;
  const { data, isLoading } = useCategoryById(categoryId);

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title={data?.name} />
      {data?.partner?.map((partner: any, index: number) => (
        <View
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 10,
            flexWrap: "wrap",
          }}
        >
          <PartnerListItemSmall partner={partner} isLoading={isLoading} />
        </View>
      ))}
    </ScrollView>
  );
}
