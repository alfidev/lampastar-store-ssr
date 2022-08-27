import { useCategories } from "./useCategories";
import { getCategoriesMap } from "@modules/Catalog/utils";

export const useCatalog = () => {
  const { isLoading, list: noMappedList = [] } = useCategories();

  const list = getCategoriesMap(noMappedList);

  return { isLoading, list };
};
