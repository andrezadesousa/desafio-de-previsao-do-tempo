"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/weatherApi";
import { Droplets, Wind, Sun, Eye } from "lucide-react";
import {
  HighlightsContainer,
  HighlightsTitle,
  HighlightsGrid,
  HighlightCard,
  CardTitle,
  CardValue,
  CardUnit,
  CardIcon,
  WelcomeCard,
  WelcomeText,
} from "./styles/TodayHighlights.styles";

const TodayHighlights = () => {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.selectedCity
  );

  const { data: weatherData } = useQuery({
    queryKey: ["weather", selectedCity],
    queryFn: () => fetchWeatherData(selectedCity!),
    enabled: !!selectedCity,
  });

  if (!weatherData) {
    return (
      <HighlightsContainer>
        <HighlightsTitle>Destaques de Hoje</HighlightsTitle>
        <WelcomeCard>
          <WelcomeText>Selecione uma cidade</WelcomeText>
        </WelcomeCard>
      </HighlightsContainer>
    );
  }

  return (
    <HighlightsContainer>
      <HighlightsTitle>Destaques de Hoje</HighlightsTitle>
      <HighlightsGrid>
        <HighlightCard $delay={0}>
          <CardIcon>
            <Droplets size={24} color="#ffc107" />
          </CardIcon>
          <CardTitle>Chance de Chuva</CardTitle>
          <CardValue>
            {weatherData.weather[0].main === "Rain" ? "Alta" : "Baixa"}
          </CardValue>
        </HighlightCard>

        <HighlightCard $delay={0.1}>
          <CardIcon>
            <Sun size={24} color="#ffc107" />
          </CardIcon>
          <CardTitle>Índice UV</CardTitle>
          <CardValue>5</CardValue>
          <CardUnit>Moderado</CardUnit>
        </HighlightCard>

        <HighlightCard $delay={0.2}>
          <CardIcon>
            <Wind size={24} color="#ffc107" />
          </CardIcon>
          <CardTitle>Velocidade do Vento</CardTitle>
          <CardValue>{weatherData.wind?.speed || 0}</CardValue>
          <CardUnit>m/s</CardUnit>
        </HighlightCard>

        <HighlightCard $delay={0.3}>
          <CardIcon>
            <Eye size={24} color="#ffc107" />
          </CardIcon>
          <CardTitle>Umidade</CardTitle>
          <CardValue>{weatherData.main.humidity}</CardValue>
          <CardUnit>%</CardUnit>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsContainer>
  );
};

export default TodayHighlights;
