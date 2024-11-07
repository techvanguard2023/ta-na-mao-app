import { useQuery } from "@tanstack/react-query";
import GlobalApi from "../../../Utils/GlobalApi";

export function useCategoryById(categoryId: string) {
  return useQuery({
    queryKey: ["category-id", categoryId],
    queryFn: async () => {
      try {
        const CategoryResponse = await GlobalApi.getCategoryById(categoryId);
        return CategoryResponse?.category;
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        return undefined;
      }
    },
    refetchInterval: 10000,
  });
}
