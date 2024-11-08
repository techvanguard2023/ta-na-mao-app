import { useUser } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import ContainerDefaultInternoComponent from "../../components/containerDefaultInterno";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import Colors from "../../Utils/Colors";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import { useCustomer } from "./components/Header/hooks/useCustomer";
import { useGetCustomer } from "./components/Header/hooks/useGetCustomer";
import PartnerList from "./components/PartnerList/PartnerList";
import Slider from "./components/Slider/Slider";

export default function HomeScreen() {
  const { user } = useUser();

  const customerId: any = user?.id;
  const { data, isLoading } = useGetCustomer(customerId);
  const { mutateAsync: saveCustomer } = useCustomer();

  async function checkIfExistCustomer() {
    if (Array.isArray(data)) {
      const customerExists = data.some((item) => item.customerId === user?.id);
      if (customerExists) {
        console.log("Cliente já existe");
        return true;
      } else {
        console.log("Cliente não existe");
        handleSaveCustomer();
      }
    } else if (data?.customerId === user?.id) {
      console.log("Cliente já existe");
      return true;
    } else {
      console.log("Cliente não existe");
      handleSaveCustomer();
    }
  }

  async function handleSaveCustomer() {
    const newUserData = {
      customerId: user?.id,
      fullName: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
    };

    try {
      await saveCustomer(newUserData);
    } catch (error: any) {
      console.log(
        "Erro ao salvar cliente:",
        error.response || error.message || error
      );
    }
  }

  useEffect(() => {
    if (data) {
      console.log("Dados do cliente:", data);
      checkIfExistCustomer();
    }
  }, [data]);

  return (
    <ScrollView style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <Header />
      <ContainerDefaultInternoComponent>
        <Slider />
        <Categories />
        <HorizontalLine />
        <PartnerList />
      </ContainerDefaultInternoComponent>
    </ScrollView>
  );
}
