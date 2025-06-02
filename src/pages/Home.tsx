"use client";

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "../components/Navbar";
import { CityCard } from "../components/CityCard";
import { WeatherDetails } from "../components/WeatherDetails";
import { useWeather } from "../hooks/useWeather";
import { cities as allCities, type City } from "../utils/cities";
import { useTheme } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../styles/theme";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div<{ isDark: boolean }>`
  min-height: 100vh;
  background: ${(props) =>
    props.isDark ? darkTheme.background : lightTheme.background};
  color: ${(props) => (props.isDark ? darkTheme.text : lightTheme.text)};
  transition: all 0.3s ease;
`;

const MainContent = styled.main`
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  animation: ${fadeIn} 0.8s ease-out;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ff1a82 0%, #ff6b9d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    animation: ${pulse} 2s infinite;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.8;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 26, 130, 0.1);
  border-left: 4px solid #ff1a82;
  border-radius: 50%;
  animation: ${Spinner} 1s linear infinite;
  margin-bottom: 1rem;
`;

const CityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const { isDark } = useTheme();

  // Generate 18 random cities on page load/refresh
  useEffect(() => {
    const shuffled = [...allCities].sort(() => 0.5 - Math.random());
    setCities(shuffled.slice(0, 18));
    setSelectedCity(null);
    setSearchTerm("");
  }, []);

  // Case insensitive search including alternative names
  const filteredCities =
    searchTerm.trim() === ""
      ? cities
      : allCities.filter((city) => {
          const term = searchTerm.toLowerCase();
          return (
            city.name.toLowerCase().includes(term) ||
            city.altNames.some((alt) => alt.toLowerCase().includes(term))
          );
        });

  const { data, isLoading, error } = useWeather(
    selectedCity?.lat ?? 0,
    selectedCity?.lon ?? 0
  );

  return (
    <Container isDark={isDark}>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <MainContent>
        {!selectedCity ? (
          <WelcomeMessage>
            <h1>Choose a city to view the forecasto</h1>
            <p>Explore the real-time weather of major Brazilian cities</p>
          </WelcomeMessage>
        ) : isLoading ? (
          <LoadingContainer>
            <LoadingSpinner />
            <h2>Carregando previsão do tempo...</h2>
          </LoadingContainer>
        ) : error ? (
          <WelcomeMessage>
            <h1 style={{ color: "#ff4757" }}>Erro ao carregar dados</h1>
            <p>Tente novamente em alguns instantes</p>
          </WelcomeMessage>
        ) : (
          <WeatherDetails cityName={selectedCity.name} data={data} />
        )}
      </MainContent>

      <CityGrid>
        {filteredCities.map((city) => (
          <CityCard
            key={city.id}
            city={city}
            isSelected={city.id === selectedCity?.id}
            onClick={() => setSelectedCity(city)}
          />
        ))}
      </CityGrid>
    </Container>
  );
};
