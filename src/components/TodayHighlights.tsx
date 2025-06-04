"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData, WeatherData } from "../services/weatherApi";
import { Droplets, Wind, Sun, Eye, Sunrise, Sunset, Clock } from "lucide-react";
import {
  HighlightsContainer,
  HighlightsTitle,
  HighlightsGrid,
  HighlightCard,
  CardTitle,
  CardValue,
  CardUnit,
  CardIcon,
  SunCard,
  SunTime,
  SunLabel,
  WelcomeCard,
  WelcomeText,
} from "./styles/TodayHighlights.styles";

const TodayHighlights = () => {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.selectedCity
  );

  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery<WeatherData>({
    queryKey: ["weather", selectedCity],
    queryFn: () => fetchWeatherData(selectedCity!),
    enabled: !!selectedCity,
  });

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calculateDayLength = (sunrise: number, sunset: number) => {
    const diff = sunset - sunrise;
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  if (isLoading) {
    return (
      <HighlightsContainer>
        <HighlightsTitle>Today Highlight</HighlightsTitle>
        <WelcomeCard>
          <WelcomeText>Carregando...</WelcomeText>
        </WelcomeCard>
      </HighlightsContainer>
    );
  }

  if (error || !weatherData) {
    return (
      <HighlightsContainer>
        <HighlightsTitle>Today Highlight</HighlightsTitle>
        <WelcomeCard>
          <WelcomeText>Selecione uma cidade válida</WelcomeText>
        </WelcomeCard>
      </HighlightsContainer>
    );
  }

  return (
    <HighlightsContainer>
      <HighlightsTitle>Today Highlight</HighlightsTitle>
      <HighlightsGrid>
        <HighlightCard>
          <CardIcon>
            <Droplets size={20} color="#60a5fa" />
          </CardIcon>
          <CardTitle>Chance of Rain</CardTitle>
          <CardValue>
            {weatherData.weather[0]?.main === "Rain" ? "Alta" : "Baixa"}
          </CardValue>
        </HighlightCard>

        <HighlightCard>
          <CardIcon>
            <Sun size={20} color="#f59e0b" />
          </CardIcon>
          <CardTitle>UV Index</CardTitle>
          <CardValue>5</CardValue>
          <CardUnit>Moderado</CardUnit>
        </HighlightCard>

        <HighlightCard>
          <CardIcon>
            <Wind size={20} color="#10b981" />
          </CardIcon>
          <CardTitle>Vento</CardTitle>
          <CardValue>{(weatherData.wind?.speed ?? 0).toFixed(1)}</CardValue>
          <CardUnit>m/s</CardUnit>
        </HighlightCard>

        <HighlightCard>
          <CardIcon>
            <Eye size={20} color="#8b5cf6" />
          </CardIcon>
          <CardTitle>Umidade</CardTitle>
          <CardValue>{weatherData.main?.humidity ?? "N/A"}</CardValue>
          <CardUnit>%</CardUnit>
        </HighlightCard>

        <SunCard>
          <div>
            <Sunrise size={18} color="#f59e0b" />
            <SunLabel>Nascer do Sol</SunLabel>
            <SunTime>{formatTime(weatherData.sys.sunrise)}</SunTime>
          </div>
          <div>
            <Sunset size={18} color="#f97316" />
            <SunLabel>Pôr do Sol</SunLabel>
            <SunTime>{formatTime(weatherData.sys.sunset)}</SunTime>
          </div>
        </SunCard>

        <HighlightCard>
          <CardIcon>
            <Clock size={20} color="#06b6d4" />
          </CardIcon>
          <CardTitle>Duração do Dia</CardTitle>
          <CardValue>
            {calculateDayLength(
              weatherData.sys.sunrise,
              weatherData.sys.sunset
            )}
          </CardValue>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsContainer>
  );
};

export default TodayHighlights;
