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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const HighlightsContainer = styled.div`
  animation: ${slideInRight} 0.6s ease-out;
  font-family: var(--font-inter);
`;

export const HighlightsTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  font-family: var(--font-poppins);
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

export const HighlightCard = styled.div<{ $delay: number }>`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid ${({ theme }) => theme.border};
  box-shadow: 0 6px 25px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  animation: ${scaleIn} 0.6s ease-out;
  animation-delay: ${({ $delay }) => $delay}s;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.primary}30;
    border-color: ${({ theme }) => theme.primary};
    animation: ${pulse} 1s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const CardIcon = styled.div`
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-family: var(--font-inter);
`;

export const CardValue = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  font-family: var(--font-poppins);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CardUnit = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-left: 0.25rem;
  font-weight: 500;
  font-family: var(--font-inter);
`;

export const WelcomeCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 8px 30px ${({ theme }) => theme.shadow};
  animation: ${scaleIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const WelcomeText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
  font-weight: 600;
  font-family: var(--font-poppins);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
