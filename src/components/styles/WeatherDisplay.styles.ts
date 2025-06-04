import styled from "styled-components";

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 300px;
`;

export const WelcomeMessage = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  font-weight: 300;
`;

export const WeatherCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 6px 24px ${({ theme }) => theme.shadow};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  max-width: 400px;
  width: 100%;
`;

export const CityName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  color: ${({ theme }) => theme.text};
`;

export const WeatherIcon = styled.div`
  margin: 0.8rem 0;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const Temperature = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0.4rem 0;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  text-transform: capitalize;
  margin-bottom: 1.5rem;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.8rem;
  margin-top: 1rem;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const DetailLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;
`;

export const DetailValue = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;
