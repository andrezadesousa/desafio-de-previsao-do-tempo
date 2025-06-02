export interface Weather {
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface Sys {
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  weather: Weather[];
  main: Main;
  sys: Sys;
}
