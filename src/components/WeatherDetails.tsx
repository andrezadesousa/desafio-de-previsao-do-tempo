import styled from "styled-components";

const Container = styled.div`
  margin: 2rem auto;
  text-align: center;
`;

interface Props {
  data: any;
  city: string;
}

export const WeatherDetails = ({ data, city }: Props) => {
  if (!data) return null;

  const { temp, feels_like, humidity } = data.current;

  return (
    <Container>
      <h2>{city}</h2>
      <p>Temperatura: {temp}°C</p>
      <p>Sensação Térmica: {feels_like}°C</p>
      <p>Umidade: {humidity}%</p>
      <p>
        Nascer do Sol:{" "}
        {new Date(data.current.sunrise * 1000).toLocaleTimeString("pt-BR")}
      </p>
      <p>
        Pôr do Sol:{" "}
        {new Date(data.current.sunset * 1000).toLocaleTimeString("pt-BR")}
      </p>
    </Container>
  );
};
