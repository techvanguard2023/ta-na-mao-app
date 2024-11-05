import { ScrollView, Text, View } from "react-native";
import HeaderComponent from "../../components/header";
import SpinnerComponent from "../../components/spinner";
import PartnerListItemSmall from "../home/components/PartnerList/PartnerListItemSmall";
import { useCategoryById } from "./hook/useCategoryById";
import { styles } from "./styles";

export default function CategoryScreen({ route }: any) {
  const categoryId = route.params.category;
  const { data, isLoading } = useCategoryById(categoryId);
  console.log(data?.partner);

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title={data?.name} />
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            height: 700,
          }}
        >
          <SpinnerComponent />
        </View>
      ) : (
        <>
          {data?.partner?.length > 0 ? (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              {data?.partner?.map((partner: any, index: number) => (
                <View
                  key={index}
                  style={{
                    width: "48%",
                    marginBottom: 10,
                  }}
                >
                  <PartnerListItemSmall
                    partner={partner}
                    isLoading={isLoading}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                height: 700,
                alignSelf: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Sem conteúdo</Text>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}
