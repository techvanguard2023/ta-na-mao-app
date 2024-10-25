import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../../../Utils/GlobalApi";

export function useSlider() {
  return useQuery({
    queryKey: ["slides"],
    queryFn: async () => {
      const bannersResponse = await GlobalApi.getBanner();
      // @ts-ignore
      return bannersResponse?.banners;
    },
    refetchInterval: 10000,
  });
}
