import { Text, View } from "react-native";
import { styles } from "./styles";

interface CardNotificationProps {
  title: string;
  date: string;
  message: string;
}

export default function CardNotificationComponent({
  title,
  date,
  message,
}: CardNotificationProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}
