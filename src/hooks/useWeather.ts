// // import { useQuery } from "@tanstack/react-query";
// // import { api } from "../services/api";

// // export const useWeather = (lat: number, lon: number) => {
// //   return useQuery({
// //     queryKey: ["weather", lat, lon],
// //     queryFn: async () => {
// //       const { data } = await api.get("", { params: { lat, lon } });
// //       return data;
// //     },
// //   });
// // };
// import { useQuery } from "@tanstack/react-query";
// import { api } from "../services/api";

// export const useWeather = (lat: number, lon: number) => {
//   return useQuery({
//     queryKey: ["weather", lat, lon],
//     queryFn: async () => {
//       const { data } = await api.get("", {
//         params: { lat, lon, exclude: "minutely,hourly,alerts" },
//       });
//       return data;
//     },
//     staleTime: 1000 * 60 * 10, // 10 min
//   });
// };
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
          appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
          units: "metric",
          lang: "pt_br",
        },
      });
      console.log("API Response:", data);
      return data;
    },
    enabled: lat !== 0 && lon !== 0,
    staleTime: 1000 * 60 * 10,
  });
};
