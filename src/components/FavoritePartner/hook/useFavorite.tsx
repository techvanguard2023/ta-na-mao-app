import { useMutation } from "@tanstack/react-query";
import GlobalApi from "../../../Utils/GlobalApi";

export function useFavorite() {
  return useMutation({
    mutationFn: (newFavorite: any) => {
      return GlobalApi.postFavorite(newFavorite);
    },
  });
}
