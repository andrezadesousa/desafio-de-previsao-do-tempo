"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/weatherApi";
import { Cloud, Sun, CloudRain, CloudSnow, Zap } from "lucide-react";
import WeeklyForecast from "./WeeklyForecast";
import {
  MainSection,
  DateSection,
  DayName,
  DateText,
  TemperatureSection,
  MainTemp,
  TempRange,
  WeatherCondition,
  WeatherIcon,
  WelcomeCard,
  WelcomeText,
} from "./styles/MainWeatherSection.styles";

const MainWeatherSection = () => {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.selectedCity
  );

  const { data: weatherData, isLoading } = useQuery({
    queryKey: ["weather", selectedCity],
    queryFn: () => fetchWeatherData(selectedCity!),
    enabled: !!selectedCity,
  });

  const getWeatherIcon = (condition: string) => {
    const iconProps = { size: 32, color: "#60a5fa" };

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

  const getCurrentDate = () => {
    const now = new Date();
    const dayName = now.toLocaleDateString("pt-BR", { weekday: "long" });
    const dateText = now.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return { dayName, dateText };
  };

  const { dayName, dateText } = getCurrentDate();

  if (!selectedCity) {
    return (
      <MainSection>
        <WelcomeCard>
          <WelcomeText>
            Escolha uma cidade para visualizar a previsão completa
          </WelcomeText>
        </WelcomeCard>
      </MainSection>
    );
  }

  if (isLoading) {
    return (
      <MainSection>
        <WelcomeCard>
          <WelcomeText>Carregando...</WelcomeText>
        </WelcomeCard>
      </MainSection>
    );
  }

  if (!weatherData) {
    return (
      <MainSection>
        <WelcomeCard>
          <WelcomeText>Erro ao carregar dados</WelcomeText>
        </WelcomeCard>
      </MainSection>
    );
  }

  return (
    <MainSection>
      <DateSection>
        <DayName>{dayName}</DayName>
        <DateText>{dateText}</DateText>
      </DateSection>

      <TemperatureSection>
        <MainTemp>{Math.round(weatherData.main.temp)}°C</MainTemp>
        <TempRange>
          High: {Math.round(weatherData.main.temp_max)}° Low:{" "}
          {Math.round(weatherData.main.temp_min)}°
        </TempRange>
      </TemperatureSection>

      <WeatherCondition>
        <WeatherIcon>{getWeatherIcon(weatherData.weather[0].main)}</WeatherIcon>
        {weatherData.weather[0].description}
      </WeatherCondition>

      <WeeklyForecast />
    </MainSection>
  );
};

export default MainWeatherSection;
