"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { setSelectedCity } from "../store/slices/weatherSlice";
import {
  CitiesContainer,
  CitiesTitle,
  CitiesGrid,
  CityCard,
  CityName,
  CityIcon,
} from "./styles/AvailableCities.styles";
import { MapPin } from "lucide-react";

const AvailableCities = () => {
  const { cities, searchTerm, selectedCity } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch();

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .trim();
  };

  const filteredCities = cities.filter((city) =>
    normalizeText(city).includes(searchTerm)
  );

  const handleCityClick = (city: string) => {
    dispatch(setSelectedCity(city));
  };

  return (
    <CitiesContainer>
      <CitiesTitle>Cidades Disponíveis</CitiesTitle>
      <CitiesGrid>
        {filteredCities.map((city, index) => (
          <CityCard
            key={index}
            onClick={() => handleCityClick(city)}
            $isSelected={selectedCity === city}
            $delay={index * 0.05}
          >
            <CityIcon>
              <MapPin size={16} />
            </CityIcon>
            <CityName>{city}</CityName>
          </CityCard>
        ))}
      </CitiesGrid>
    </CitiesContainer>
  );
};

export default AvailableCities;
