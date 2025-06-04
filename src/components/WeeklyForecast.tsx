"use client";

import { Cloud, Sun, CloudRain, CloudSnow } from "lucide-react";
import {
  ForecastContainer,
  ForecastTitle,
  ForecastGrid,
  ForecastItem,
  ForecastDay,
  ForecastIcon,
  ForecastTemp,
} from "./styles/WeeklyForecast.styles";

const WeeklyForecast = () => {
  const weeklyData = [
    { day: "TUE", icon: "sun", temp: "20°" },
    { day: "WED", icon: "cloud", temp: "21°" },
    { day: "THU", icon: "rain", temp: "20°" },
    { day: "FRI", icon: "sun", temp: "19°" },
    { day: "SAT", icon: "cloud", temp: "18°" },
    { day: "SUN", icon: "rain", temp: "18°" },
    { day: "MON", icon: "sun", temp: "19°" },
  ];

  const getIcon = (iconType: string) => {
    const iconProps = { size: 24, color: "#60a5fa" };
    switch (iconType) {
      case "sun":
        return <Sun {...iconProps} />;
      case "cloud":
        return <Cloud {...iconProps} />;
      case "rain":
        return <CloudRain {...iconProps} />;
      case "snow":
        return <CloudSnow {...iconProps} />;
      default:
        return <Sun {...iconProps} />;
    }
  };

  return (
    <ForecastContainer>
      <ForecastTitle>Today / Week</ForecastTitle>
      <ForecastGrid>
        {weeklyData.map((item, index) => (
          <ForecastItem key={index} $delay={index * 0.1}>
            <ForecastDay>{item.day}</ForecastDay>
            <ForecastIcon>{getIcon(item.icon)}</ForecastIcon>
            <ForecastTemp>{item.temp}</ForecastTemp>
          </ForecastItem>
        ))}
      </ForecastGrid>
    </ForecastContainer>
  );
};

export default WeeklyForecast;
