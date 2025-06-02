import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { CityCard } from "../components/CityCard";
import { WeatherDetails } from "../components/WeatherDetails";
import { useWeather } from "../hooks/useWeather";

const cities = [
  { name: "São Paulo", lat: -23.55, lon: -46.63 },
  { name: "Rio de Janeiro", lat: -22.91, lon: -43.17 },
  { name: "Salvador", lat: -12.97, lon: -38.5 },
  { name: "Brasília", lat: -15.78, lon: -47.93 },
  { name: "Fortaleza", lat: -3.72, lon: -38.54 },
  { name: "Belo Horizonte", lat: -19.92, lon: -43.94 },
  { name: "Manaus", lat: -3.1, lon: -60.02 },
  { name: "Curitiba", lat: -25.42, lon: -49.27 },
  { name: "Recife", lat: -8.05, lon: -34.88 },
  { name: "Porto Alegre", lat: -30.03, lon: -51.23 },
  { name: "Belém", lat: -1.45, lon: -48.5 },
  { name: "Goiânia", lat: -16.68, lon: -49.25 },
  { name: "Guarulhos", lat: -23.46, lon: -46.53 },
  { name: "Campinas", lat: -22.9, lon: -47.06 },
  { name: "São Luís", lat: -2.53, lon: -44.3 },
  { name: "Maceió", lat: -9.66, lon: -35.73 },
  { name: "Duque de Caxias", lat: -22.79, lon: -43.31 },
  { name: "Natal", lat: -5.79, lon: -35.2 },
];

export const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState<(typeof cities)[0] | null>(
    null
  );

  const city =
    selectedCity || cities[Math.floor(Math.random() * cities.length)];

  const { data, isLoading } = useWeather(city.lat, city.lon);

  const filteredCities = cities.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      {!selectedCity && (
        <h2 style={{ textAlign: "center" }}>
          Escolha uma cidade para visualizar a previsão completa
        </h2>
      )}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredCities.map((c) => (
          <CityCard
            key={c.name}
            city={c.name}
            selected={selectedCity?.name === c.name}
            onClick={() => setSelectedCity(c)}
          />
        ))}
      </div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <WeatherDetails data={data} city={city.name} />
      )}
    </>
  );
};
