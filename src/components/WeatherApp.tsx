"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { generateRandomCities } from "../store/slices/weatherSlice";
import Header from "./Header";
import MainWeatherSection from "./MainWeatherSection";
import TodayHighlights from "./TodayHighlights";
import AvailableCities from "./AvailableCities";
import { AppContainer, ContentGrid } from "./styles/WeatherApp.styles";

const WeatherApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateRandomCities());
  }, [dispatch]);

  return (
    <AppContainer>
      <Header />
      <ContentGrid>
        <MainWeatherSection />
        <TodayHighlights />
        <AvailableCities />
      </ContentGrid>
    </AppContainer>
  );
};

export default WeatherApp;
