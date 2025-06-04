const API_KEY = "fcc8ee4ade3fdb4d8967dee84a19b1b5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  sys: {
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric&lang=pt_br`
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Failed to fetch weather data: ${response.statusText} (${errorData.message})`
    );
  }

  return response.json();
};
