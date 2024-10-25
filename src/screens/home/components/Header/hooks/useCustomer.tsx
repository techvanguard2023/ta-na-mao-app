import { useMutation } from "@tanstack/react-query";
import GlobalApi from "../../../../../Utils/GlobalApi";

export function useCustomer() {
  return useMutation({
    mutationFn: (newCustomer: any) => {
      return GlobalApi.postCustomer(newCustomer);
    },
  });
}
