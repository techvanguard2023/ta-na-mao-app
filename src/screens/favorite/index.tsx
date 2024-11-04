import ContainerDefaultInternoComponent from "../../components/containerDefaultInterno";
import HeaderComponent from "../../components/header";
import { useFavoriteByCustomerId } from "./hook/useFavoritesByCustomerId";

export default function FavoriteScreen() {
  const { data, isLoading } = useFavoriteByCustomerId(
    "user_2nfSKRhZIap44PO3QCO8CjGeuYI"
  );

  console.log(data);

  return (
    <ContainerDefaultInternoComponent>
      <HeaderComponent title="Favoritos" />
    </ContainerDefaultInternoComponent>
  );
}
