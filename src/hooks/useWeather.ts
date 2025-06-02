// import { useQuery } from "@tanstack/react-query";
// import { api } from "../services/api";

// export const useWeather = (lat: number, lon: number) => {
//   return useQuery({
//     queryKey: ["weather", lat, lon],
//     queryFn: async () => {
//       const { data } = await api.get("", { params: { lat, lon } });
//       return data;
//     },
//   });
// };
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: async () => {
      const { data } = await api.get("", {
        params: { lat, lon, exclude: "minutely,hourly,alerts" },
      });
      return data;
    },
    staleTime: 1000 * 60 * 10, // 10 min
  });
};
