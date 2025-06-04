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

export const CitiesContainer = styled.div`
  animation: ${slideUp} 0.8s ease-out;
`;

export const CitiesTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

export const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CityCard = styled.div<{ $isSelected: boolean; $delay: number }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.primary : theme.cardBackground};
  border: 1px solid
    ${({ theme, $isSelected }) => ($isSelected ? theme.primary : theme.border)};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${slideUp} 0.4s ease-out;
  animation-delay: ${({ $delay }) => $delay}s;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.5rem;
  }
`;

export const CityIcon = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const CityName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;
