import { ScrollView } from "react-native";
import CardNotificationComponent from "../../components/cardNotification";
import HeaderComponent from "../../components/header";
import { useNotification } from "./hook/useNotification";
import { styles } from "./styles";

export default function NotificationScreen() {
  const { data, isLoading, isError } = useNotification();

  console.log(data);

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title="Notificações" />
      {data?.map((item: any) => (
        <CardNotificationComponent
          key={item.id}
          title={item.title}
          date={item.date}
          message={item.message}
        />
      ))}
    </ScrollView>
  );
}
