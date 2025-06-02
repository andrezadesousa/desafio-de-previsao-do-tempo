export interface City {
  id: number;
  name: string;
  altNames: string[]; // nomes alternativos para busca
  lat: number;
  lon: number;
}

export const cities: City[] = [
  {
    id: 1,
    name: "São Paulo",
    altNames: ["Sao Paulo", "SP"],
    lat: -23.5505,
    lon: -46.6333,
  },
  {
    id: 2,
    name: "Rio de Janeiro",
    altNames: ["Rio", "RJ"],
    lat: -22.9068,
    lon: -43.1729,
  },
  { id: 3, name: "London", altNames: ["Londres"], lat: 51.5074, lon: -0.1278 },
  {
    id: 4,
    name: "New York",
    altNames: ["NYC", "Nova York"],
    lat: 40.7128,
    lon: -74.006,
  },
  // ... adicione mais cidades para totalizar 50+ para busca
  { id: 5, name: "Tokyo", altNames: ["Tóquio"], lat: 35.6895, lon: 139.6917 },
  // etc
];
