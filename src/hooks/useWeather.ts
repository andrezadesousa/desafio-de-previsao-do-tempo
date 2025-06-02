import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: async () => {
      const { data } = await api.get("", {
        params: {
          lat,
          lon,
          appid: "fcc8ee4ade3fdb4d8967dee84a19b1b5",
          units: "metric",
          lang: "pt_br",
        },
      });
      return data;
    },
    enabled: lat !== 0 && lon !== 0,
    staleTime: 1000 * 60 * 10,
  });
};
