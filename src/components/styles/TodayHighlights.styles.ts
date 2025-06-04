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

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const HighlightsContainer = styled.div`
  animation: ${slideInRight} 0.6s ease-out;
`;

export const HighlightsTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const HighlightCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  animation: ${scaleIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.shadow};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardIcon = styled.div`
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h3`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const CardValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const CardUnit = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-left: 0.25rem;
`;

export const SunCard = styled(HighlightCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: span 2;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const SunTime = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SunLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const WelcomeCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.border};
  animation: ${scaleIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const WelcomeText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
