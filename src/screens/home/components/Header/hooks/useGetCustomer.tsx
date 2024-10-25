import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../../../Utils/GlobalApi";

export function useGetCustomer(customerId: string) {
  return useQuery({
    queryKey: ["customer-id", customerId],
    queryFn: async () => {
      const customerResponse = await GlobalApi.getCustomer(customerId);
      // @ts-ignore
      return customerResponse?.customers;
    },
  });
}
