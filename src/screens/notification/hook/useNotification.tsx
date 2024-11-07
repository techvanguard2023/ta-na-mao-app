import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../Utils/GlobalApi";

export function useNotification() {
  return useQuery({
    queryKey: ["notification-id"],
    queryFn: async () => {
      try {
        const NotificationResponse = await GlobalApi.getNotification();
        return NotificationResponse?.notification;
      } catch (error) {
        console.error("Erro ao buscar notificação:", error);
        return undefined;
      }
    },
    refetchInterval: 10000,
  });
}
