import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../service/apiService";

export const useLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: fetchData,
  });
};