// import axios from "axios";

// export const api = axios.create({
//   baseURL: "https://api.openweathermap.org/data/3.0/onecall",
//   params: {
//     appid: "fcc8ee4ade3fdb4d8967dee84a19b1b5",
//     units: "metric",
//     lang: "pt_br",
//   },
// });
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});
