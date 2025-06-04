"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomCities } from "../store/slices/weatherSlice";
import type { RootState } from "../store/store";
import Header from "./Header";
import MainWeatherSection from "./MainWeatherSection";
import TodayHighlights from "./TodayHighlights";
import AvailableCities from "./AvailableCities";
import Footer from "./Footer";
import InitialMessage from "./InitialMessage";
import { AppContainer, ContentGrid } from "./styles/WeatherApp.styles";

const WeatherApp = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector(
    (state: RootState) => state.weather.selectedCity
  );

  useEffect(() => {
    // Gera cidades aleatórias toda vez que a página é atualizada
    dispatch(generateRandomCities());
  }, [dispatch]);

  return (
    <AppContainer>
      <Header />
      {!selectedCity ? (
        <InitialMessage />
      ) : (
        <ContentGrid>
          <MainWeatherSection />
          <TodayHighlights />
          <AvailableCities />
        </ContentGrid>
      )}
      <Footer />
    </AppContainer>
  );
};

export default WeatherApp;
