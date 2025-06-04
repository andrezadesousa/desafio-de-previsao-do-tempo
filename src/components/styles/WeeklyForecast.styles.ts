import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ForecastContainer = styled.div`
  margin: 2rem 0;
`;

export const ForecastTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

export const ForecastItem = styled.div<{ $delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  animation: ${slideUp} 0.6s ease-out;
  animation-delay: ${({ $delay }) => $delay}s;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  }
`;

export const ForecastDay = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;
`;

export const ForecastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForecastTemp = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;
