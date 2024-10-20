import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../../../Utils/GlobalApi";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const categoriesResponse = await GlobalApi.getCategories();
      //console.log(bannersResponse);
      // @ts-ignore
      return categoriesResponse?.categories;
    },
    refetchOnWindowFocus: true,
  });
}
