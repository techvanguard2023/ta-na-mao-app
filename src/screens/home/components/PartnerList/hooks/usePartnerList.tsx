import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../../../Utils/GlobalApi";

export function usePartnerList() {
  return useQuery({
    queryKey: ["partners-list"],
    queryFn: async () => {
      const partnerListResponse = await GlobalApi.getPartnersList();
      //console.log(bannersResponse);
      // @ts-ignore
      return partnerListResponse?.partners;
    },
    refetchInterval: 10000,
  });
}
