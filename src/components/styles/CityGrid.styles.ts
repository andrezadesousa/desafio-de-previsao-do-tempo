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

export const GridContainer = styled.div`
  margin-top: 2rem;
`;

export const GridTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const CityCard = styled.div<{ $isSelected: boolean; $delay: number }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.primary : theme.cardBackground};
  border: 1px solid
    ${({ theme, $isSelected }) => ($isSelected ? theme.primary : theme.border)};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${slideUp} 0.4s ease-out;
  animation-delay: ${({ $delay }) => $delay}s;
  animation-fill-mode: both;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const CityIcon = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
`;

export const CityName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
