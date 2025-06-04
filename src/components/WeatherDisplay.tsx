"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/weatherApi";
import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  Zap,
  Eye,
  Droplets,
  Thermometer,
  Sunrise,
  Sunset,
} from "lucide-react";
import {
  DisplayContainer,
  WelcomeMessage,
  WeatherCard,
  CityName,
  WeatherIcon,
  Temperature,
  Description,
  DetailsGrid,
  DetailItem,
  DetailLabel,
  DetailValue,
} from "./styles/WeatherDisplay.styles";

const WeatherDisplay = () => {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.selectedCity
  );

  const { data: weatherData, isLoading } = useQuery({
    queryKey: ["weather", selectedCity],
    queryFn: () => fetchWeatherData(selectedCity!),
    enabled: !!selectedCity,
  });

  const getWeatherIcon = (condition: string) => {
    const iconProps = { size: 48, color: "#654321" };

    switch (condition.toLowerCase()) {
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

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!selectedCity) {
    return (
      <DisplayContainer>
        <WelcomeMessage>
          Escolha uma cidade para visualizar a previsão completa
        </WelcomeMessage>
      </DisplayContainer>
    );
  }

  if (isLoading) {
    return (
      <DisplayContainer>
        <WelcomeMessage>Carregando...</WelcomeMessage>
      </DisplayContainer>
    );
  }

  if (!weatherData) {
    return (
      <DisplayContainer>
        <WelcomeMessage>Erro ao carregar dados</WelcomeMessage>
      </DisplayContainer>
    );
  }

  return (
    <DisplayContainer>
      <WeatherCard>
        <CityName>{weatherData.name}</CityName>
        <WeatherIcon>{getWeatherIcon(weatherData.weather[0].main)}</WeatherIcon>
        <Temperature>{Math.round(weatherData.main.temp)}°C</Temperature>
        <Description>{weatherData.weather[0].description}</Description>

        <DetailsGrid>
          <DetailItem>
            <Thermometer size={16} />
            <DetailLabel>Sensação</DetailLabel>
            <DetailValue>
              {Math.round(weatherData.main.feels_like)}°C
            </DetailValue>
          </DetailItem>

          <DetailItem>
            <Eye size={16} />
            <DetailLabel>Min/Max</DetailLabel>
            <DetailValue>
              {Math.round(weatherData.main.temp_min)}°/
              {Math.round(weatherData.main.temp_max)}°
            </DetailValue>
          </DetailItem>

          <DetailItem>
            <Droplets size={16} />
            <DetailLabel>Umidade</DetailLabel>
            <DetailValue>{weatherData.main.humidity}%</DetailValue>
          </DetailItem>

          <DetailItem>
            <Sunrise size={16} />
            <DetailLabel>Nascer do Sol</DetailLabel>
            <DetailValue>{formatTime(weatherData.sys.sunrise)}</DetailValue>
          </DetailItem>

          <DetailItem>
            <Sunset size={16} />
            <DetailLabel>Pôr do Sol</DetailLabel>
            <DetailValue>{formatTime(weatherData.sys.sunset)}</DetailValue>
          </DetailItem>
        </DetailsGrid>
      </WeatherCard>
    </DisplayContainer>
  );
};

export default WeatherDisplay;
