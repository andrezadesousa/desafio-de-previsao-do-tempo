"use client";

import type React from "react";
import styled, { keyframes } from "styled-components";
import { MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../styles/theme";
import type { City } from "../utils/cities";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const CardContainer = styled.div<{ isDark: boolean; isSelected: boolean }>`
  background: ${(props) =>
    props.isDark ? darkTheme.surface : lightTheme.surface};
  border: 2px solid
    ${(props) =>
      props.isSelected
        ? "#ff1a82"
        : props.isDark
        ? darkTheme.border
        : lightTheme.border};
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: ${slideUp} 0.6s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) =>
      props.isSelected
        ? "linear-gradient(90deg, #ff1a82, #ff6b9d)"
        : "transparent"};
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${(props) =>
      props.isDark ? darkTheme.shadowHover : lightTheme.shadowHover};
    border-color: #ff1a82;
    animation: ${float} 2s ease-in-out infinite;

    &::before {
      background: linear-gradient(90deg, #ff1a82, #ff6b9d);
    }
  }

  ${(props) =>
    props.isSelected &&
    `
    background: linear-gradient(135deg, rgba(255, 26, 130, 0.1) 0%, rgba(255, 107, 157, 0.05) 100%);
    box-shadow: ${
      props.isDark ? darkTheme.shadowHover : lightTheme.shadowHover
    };
  `}
`;

const CityName = styled.h3<{ isDark: boolean }>`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => (props.isDark ? darkTheme.text : lightTheme.text)};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #ff1a82;
    font-size: 1rem;
  }
`;

const AltNames = styled.p<{ isDark: boolean }>`
  font-size: 0.85rem;
  color: ${(props) =>
    props.isDark ? darkTheme.textSecondary : lightTheme.textSecondary};
  opacity: 0.8;
`;

interface CityCardProps {
  city: City;
  isSelected: boolean;
  onClick: () => void;
}

export const CityCard: React.FC<CityCardProps> = ({
  city,
  isSelected,
  onClick,
}) => {
  const { isDark } = useTheme();

  return (
    <CardContainer isDark={isDark} isSelected={isSelected} onClick={onClick}>
      <CityName isDark={isDark}>
        <MapPin />
        {city.name}
      </CityName>
      {city.altNames.length > 0 && (
        <AltNames isDark={isDark}>{city.altNames.join(", ")}</AltNames>
      )}
    </CardContainer>
  );
};
