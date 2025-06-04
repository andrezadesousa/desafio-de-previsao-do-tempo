import styled, { keyframes } from "styled-components";

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CitiesContainer = styled.div`
  animation: ${slideInRight} 0.8s ease-out;
`;

export const CitiesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

export const SeeAllButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`;

export const CitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CityItem = styled.div<{ $delay: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${({ $delay }) => $delay}s;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const CityName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const CityCountry = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 0.25rem;
`;

export const CityTemp = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const CityIcon = styled.div`
  display: flex;
  align-items: center;
`;
