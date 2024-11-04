import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../Utils/GlobalApi";

export function useFavoriteByCustomerId(customerId: string) {
  return useQuery({
    queryKey: ["favorite-customer-id", customerId],
    queryFn: async () => {
      try {
        const favoriteResponse = await GlobalApi.getFavoritesByCustomerId(
          customerId
        );
        return favoriteResponse?.favorites;
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
        return undefined;
      }
    },
    refetchInterval: 10000,
  });
}
