// import styled from "styled-components";

// const Container = styled.div`
//   margin: 2rem auto;
//   text-align: center;
// `;

// interface Props {
//   data: any;
//   city: string;
// }

// export const WeatherDetails = ({ data, city }: Props) => {
//   if (!data) return null;

//   const { temp, feels_like, humidity } = data.current;

//   return (
//     <Container>
//       <h2>{city}</h2>
//       <p>Temperatura: {temp}°C</p>
//       <p>Sensação Térmica: {feels_like}°C</p>
//       <p>Umidade: {humidity}%</p>
//       <p>
//         Nascer do Sol:{" "}
//         {new Date(data.current.sunrise * 1000).toLocaleTimeString("pt-BR")}
//       </p>
//       <p>
//         Pôr do Sol:{" "}
//         {new Date(data.current.sunset * 1000).toLocaleTimeString("pt-BR")}
//       </p>
//     </Container>
//   );
// };
import React from "react";
import styled from "styled-components";

interface WeatherDetailsProps {
  cityName: string;
  data: any; // dados da API OpenWeather
}

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
  margin-top: 1rem;
`;

const InfoItem = styled.div`
  font-size: 1.2rem;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const formatTime = (unix: number) =>
  new Date(unix * 1000).toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  cityName,
  data,
}) => {
  if (!data) return null;

  const current = data.current;
  const weather = current.weather[0];

  return (
    <Container>
      <Title>{cityName}</Title>
      <Icon
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
      <div>{weather.description}</div>
      <InfoGrid>
        <InfoItem>Temperatura: {current.temp}°C</InfoItem>
        <InfoItem>Sensação térmica: {current.feels_like}°C</InfoItem>
        <InfoItem>Min: {data.daily[0].temp.min}°C</InfoItem>
        <InfoItem>Max: {data.daily[0].temp.max}°C</InfoItem>
        <InfoItem>Umidade: {current.humidity}%</InfoItem>
        <InfoItem>Nascer do sol: {formatTime(data.daily[0].sunrise)}</InfoItem>
        <InfoItem>Pôr do sol: {formatTime(data.daily[0].sunset)}</InfoItem>
      </InfoGrid>
    </Container>
  );
};
