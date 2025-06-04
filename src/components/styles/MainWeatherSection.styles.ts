import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${slideInLeft} 0.6s ease-out;
`;

export const DateSection = styled.div`
  margin-bottom: 1rem;
`;

export const DayName = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 0;
  animation: ${slideInLeft} 0.8s ease-out;
`;

export const DateText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0.25rem 0 0 0;
  animation: ${slideInLeft} 1s ease-out;
`;

export const TemperatureSection = styled.div`
  margin: 1rem 0;
  animation: ${bounceIn} 1s ease-out;
`;

export const MainTemp = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  margin-bottom: 0.5rem;
`;

export const TempRange = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const WeatherCondition = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  margin: 1rem 0;
  animation: ${slideInLeft} 1.2s ease-out;
`;

export const WeatherIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const WelcomeCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.border};
  animation: ${bounceIn} 0.8s ease-out;
`;

export const WelcomeText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;
