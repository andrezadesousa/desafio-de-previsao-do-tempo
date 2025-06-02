"use client";

import type React from "react";
import styled, { keyframes } from "styled-components";
import { Thermometer, Sunrise, Sunset, Wind, Eye } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import type { WeatherData } from "../types/weather";
import { darkTheme, lightTheme } from "../styles/theme";

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeInScale} 0.8s ease-out;
`;

const MainCard = styled.div<{ isDark: boolean }>`
  background: ${(props) =>
    props.isDark ? darkTheme.surface : lightTheme.surface};
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${(props) =>
    props.isDark ? darkTheme.shadow : lightTheme.shadow};
  border: 1px solid
    ${(props) => (props.isDark ? darkTheme.border : lightTheme.border)};
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const CityName = styled.h1<{ isDark: boolean }>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => (props.isDark ? darkTheme.text : lightTheme.text)};
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ff1a82 0%, #ff6b9d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${pulse} 2s infinite;
`;

const WeatherIcon = styled.img`
  width: 120px;
  height: 120px;
  animation: ${bounce} 2s infinite;
  filter: drop-shadow(0 4px 8px rgba(255, 26, 130, 0.3));
`;

const Temperature = styled.div<{ isDark: boolean }>`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => (props.isDark ? darkTheme.text : lightTheme.text)};
  margin: 1rem 0;
  text-shadow: 0 2px 4px rgba(255, 26, 130, 0.3);
`;

const Description = styled.p<{ isDark: boolean }>`
  font-size: 1.2rem;
  color: ${(props) =>
    props.isDark ? darkTheme.textSecondary : lightTheme.textSecondary};
  text-transform: capitalize;
  font-weight: 500;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const DetailCard = styled.div<{ isDark: boolean }>`
  background: ${(props) =>
    props.isDark ? darkTheme.background : lightTheme.background};
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid
    ${(props) => (props.isDark ? darkTheme.border : lightTheme.border)};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) =>
      props.isDark ? darkTheme.shadowHover : lightTheme.shadowHover};
    border-color: #ff1a82;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #ff1a82, #ff6b9d);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const DetailIcon = styled.div`
  color: #ff1a82;
  font-size: 1.5rem;
  animation: ${pulse} 2s infinite;
`;

const DetailLabel = styled.h3<{ isDark: boolean }>`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) =>
    props.isDark ? darkTheme.textSecondary : lightTheme.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DetailValue = styled.p<{ isDark: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.isDark ? darkTheme.text : lightTheme.text)};
  margin-left: 2.25rem;
`;

interface WeatherDetailsProps {
  cityName: string;
  data: WeatherData | null;
}

const formatTime = (unix: number | undefined) => {
  if (!unix) return "-";
  return new Date(unix * 1000).toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  cityName,
  data,
}) => {
  const { isDark } = useTheme();

  if (!data) return null;

  const weather = data.weather[0];
  const { temp, feels_like, temp_min, temp_max, humidity, pressure } =
    data.main;
  const { sunrise, sunset } = data.sys;
  const windSpeed = data.wind?.speed || 0;
  const visibility = data.visibility ? data.visibility / 1000 : 0;

  return (
    <Container>
      <MainCard isDark={isDark}>
        <Header>
          <CityName isDark={isDark}>{cityName}</CityName>
          {weather && (
            <>
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                alt={weather.description}
              />
              <Temperature isDark={isDark}>{Math.round(temp)}°C</Temperature>
              <Description isDark={isDark}>{weather.description}</Description>
            </>
          )}
        </Header>

        <DetailsGrid>
          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Thermometer />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Sensação Térmica</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>
              {Math.round(feels_like)}°C
            </DetailValue>
          </DetailCard>

          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Thermometer />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Mínima</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>{Math.round(temp_min)}°C</DetailValue>
          </DetailCard>

          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Thermometer />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Máxima</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>{Math.round(temp_max)}°C</DetailValue>
          </DetailCard>

          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Thermometer />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Umidade</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>{humidity}%</DetailValue>
          </DetailCard>

          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Sunrise />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Nascer do Sol</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>{formatTime(sunrise)}</DetailValue>
          </DetailCard>

          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Sunset />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Pôr do Sol</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>{formatTime(sunset)}</DetailValue>
          </DetailCard>

          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Wind />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Vento</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>{windSpeed} m/s</DetailValue>
          </DetailCard>

          <DetailCard isDark={isDark}>
            <DetailHeader>
              <DetailIcon>
                <Eye />
              </DetailIcon>
              <DetailLabel isDark={isDark}>Visibilidade</DetailLabel>
            </DetailHeader>
            <DetailValue isDark={isDark}>{visibility} km</DetailValue>
          </DetailCard>
        </DetailsGrid>
      </MainCard>
    </Container>
  );
};
