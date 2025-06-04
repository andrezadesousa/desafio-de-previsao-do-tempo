import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Adicionei para remover acentos
    .trim();
};

interface WeatherState {
  cities: string[];
  selectedCity: string | null;
  searchTerm: string;
}

const AVAILABLE_CITIES = [
  "São Paulo",
  "Carapicuíba",
  "Guarulhos",
  "Campinas",
  "São Bernardo do Campo",
  "Santo André",
  "Osasco",
  "São José dos Campos",
  "Ribeirão Preto",
  "Sorocaba",
  "Santos",
  "Mauá",
  "São José do Rio Preto",
  "Mogi das Cruzes",
  "Diadema",
  "Jundiaí",
  "Piracicaba",
  "Bauru",
  "Itaquaquecetuba",
  "Franca",
];

const getRandomCities = (): string[] => {
  const shuffled = [...AVAILABLE_CITIES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 20);
};

const initialState: WeatherState = {
  cities: getRandomCities(),
  selectedCity: null,
  searchTerm: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = normalizeText(action.payload);
    },
    generateRandomCities: (state) => {
      state.cities = getRandomCities();
      state.selectedCity = null;
      state.searchTerm = "";
    },
  },
});

export const { setSelectedCity, setSearchTerm, generateRandomCities } =
  weatherSlice.actions;
export default weatherSlice.reducer;
