export interface City {
  id: number;
  name: string;
  altNames: string[];
  lat: number;
  lon: number;
}

export const cities: City[] = [
  {
    id: 1,
    name: "São Paulo",
    altNames: ["Sao Paulo"],
    lat: -23.55052,
    lon: -46.633308,
  },
  {
    id: 2,
    name: "Rio de Janeiro",
    altNames: ["Rio"],
    lat: -22.906847,
    lon: -43.172896,
  },
  {
    id: 3,
    name: "New York",
    altNames: ["NYC", "Nova York"],
    lat: 40.712776,
    lon: -74.005974,
  },
  {
    id: 4,
    name: "London",
    altNames: ["Londres"],
    lat: 51.507351,
    lon: -0.127758,
  },
  {
    id: 5,
    name: "Tokyo",
    altNames: ["Tóquio"],
    lat: 35.689487,
    lon: 139.691711,
  },
  { id: 6, name: "Paris", altNames: [], lat: 48.856613, lon: 2.352222 },
  { id: 7, name: "Sydney", altNames: [], lat: -33.86882, lon: 151.20929 },
  {
    id: 8,
    name: "Moscow",
    altNames: ["Moscou"],
    lat: 55.755825,
    lon: 37.617298,
  },
  { id: 9, name: "Berlin", altNames: [], lat: 52.52, lon: 13.405 },
  {
    id: 10,
    name: "Cape Town",
    altNames: ["Cidade do Cabo"],
    lat: -33.924868,
    lon: 18.424055,
  },
  { id: 11, name: "Dubai", altNames: [], lat: 25.204849, lon: 55.270782 },
  {
    id: 12,
    name: "Buenos Aires",
    altNames: [],
    lat: -34.603722,
    lon: -58.381592,
  },
  {
    id: 13,
    name: "Beijing",
    altNames: ["Peking"],
    lat: 39.9042,
    lon: 116.4074,
  },
  { id: 14, name: "Rome", altNames: ["Roma"], lat: 41.902782, lon: 12.496366 },
  { id: 15, name: "Bangkok", altNames: [], lat: 13.756331, lon: 100.501762 },
  { id: 16, name: "Seoul", altNames: [], lat: 37.5665, lon: 126.978 },
  {
    id: 17,
    name: "Mexico City",
    altNames: ["Cidade do México"],
    lat: 19.432608,
    lon: -99.133209,
  },
  { id: 18, name: "Toronto", altNames: [], lat: 43.653225, lon: -79.383186 },
];
