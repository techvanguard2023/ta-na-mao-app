import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../../../Utils/GlobalApi";

export function useGetCustomer(customerId: string) {
  return useQuery({
    queryKey: ["customer-id", customerId],
    queryFn: async () => {
      try {
        const customerResponse = await GlobalApi.getCustomer(customerId);
        return customerResponse?.customers;
      } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        return undefined;
      }
    },
  });
}
