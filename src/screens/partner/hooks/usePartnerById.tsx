import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../Utils/GlobalApi";

export function useGetPartnerById(partnerId: string) {
  return useQuery({
    queryKey: ["partner-id", partnerId],
    queryFn: async () => {
      const partnerListResponse = await GlobalApi.getPartnerById(partnerId);
      // @ts-ignore
      return partnerListResponse?.partner;
    },
  });
}
