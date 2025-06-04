import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  /* Layout:
     MainWeatherSection | TodayHighlights
     AvailableCities    | AvailableCities (span)
  */

  > :nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  > :nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  > :nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;

    > :nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    > :nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }

    > :nth-child(3) {
      grid-column: 1;
      grid-row: 3;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`;
