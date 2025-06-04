"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useQueries } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/weatherApi";
import { Cloud, Sun, CloudRain, CloudSnow, Zap } from "lucide-react";
import {
  CitiesContainer,
  CitiesTitle,
  CitiesList,
  CityItem,
  CityName,
  CityTemp,
  CityIcon,
  CityCountry,
  SeeAllButton,
} from "./styles/OtherCities.styles";

const OtherCities = () => {
  const { cities, searchTerm } = useSelector(
    (state: RootState) => state.weather
  );

  const filteredCities = cities
    .filter((city) => city.toLowerCase().includes(searchTerm))
    .slice(0, 6);

  const cityQueries = useQueries({
    queries: filteredCities.map((city) => ({
      queryKey: ["weather", city],
      queryFn: () => fetchWeatherData(city),
      staleTime: 5 * 60 * 1000, // 5 minutes
    })),
  });

  const getWeatherIcon = (condition: string) => {
    const iconProps = { size: 20, color: "#60a5fa" };

    switch (condition?.toLowerCase()) {
      case "clear":
        return <Sun {...iconProps} />;
      case "clouds":
        return <Cloud {...iconProps} />;
      case "rain":
        return <CloudRain {...iconProps} />;
      case "snow":
        return <CloudSnow {...iconProps} />;
      case "thunderstorm":
        return <Zap {...iconProps} />;
      default:
        return <Sun {...iconProps} />;
    }
  };

  return (
    <CitiesContainer>
      <CitiesTitle>
        Other Cities
        <SeeAllButton>See All</SeeAllButton>
      </CitiesTitle>

      <CitiesList>
        {cityQueries.map((query, index) => {
          const city = filteredCities[index];
          const data = query.data;

          return (
            <CityItem key={city} $delay={index * 0.1}>
              <div>
                <CityName>{city}</CityName>
                <CityCountry>Brazil</CityCountry>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                {data && (
                  <>
                    <CityIcon>{getWeatherIcon(data.weather[0].main)}</CityIcon>
                    <CityTemp>{Math.round(data.main.temp)}°</CityTemp>
                  </>
                )}
                {query.isLoading && <CityTemp>--°</CityTemp>}
              </div>
            </CityItem>
          );
        })}
      </CitiesList>
    </CitiesContainer>
  );
};

export default OtherCities;
