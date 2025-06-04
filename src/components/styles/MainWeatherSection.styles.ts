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

const parallaxFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${slideInLeft} 0.6s ease-out;
  font-family: var(--font-inter);
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

export const EmptyText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  font-family: var(--font-poppins);
  font-weight: 500;
`;

export const DateSection = styled.div`
  margin-bottom: 1rem;
`;

export const DayName = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 0;
  animation: ${slideInLeft} 0.8s ease-out;
  font-family: var(--font-poppins);
`;

export const DateText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0.25rem 0 0 0;
  font-weight: 500;
  animation: ${slideInLeft} 1s ease-out;
  font-family: var(--font-inter);
`;

export const TemperatureSection = styled.div`
  margin: 1.5rem 0;
  animation: ${bounceIn} 1s ease-out;
`;

export const MainTemp = styled.div`
  font-size: 4.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  margin-bottom: 0.5rem;
  animation: ${parallaxFloat} 3s ease-in-out infinite;
  font-family: var(--font-poppins);
`;

export const TempRange = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;
  font-family: var(--font-inter);
`;

export const WeatherCondition = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin: 1.5rem 0;
  font-weight: 600;
  animation: ${slideInLeft} 1.2s ease-out;
  font-family: var(--font-poppins);
`;

export const WeatherIcon = styled.div`
  display: flex;
  align-items: center;
  animation: ${parallaxFloat} 4s ease-in-out infinite;
`;

export const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailCard = styled.div<{ $delay: number }>`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  animation: ${slideInLeft} 0.6s ease-out;
  animation-delay: ${({ $delay }) => $delay}s;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 30px ${({ theme }) => theme.primary}30;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const DetailIcon = styled.div`
  margin-bottom: 0.75rem;
  animation: ${parallaxFloat} 3s ease-in-out infinite;
`;

export const DetailLabel = styled.h4`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0 0 0.5rem 0;
  font-weight: 500;
  font-family: var(--font-inter);
`;

export const DetailValue = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  font-family: var(--font-poppins);
`;
