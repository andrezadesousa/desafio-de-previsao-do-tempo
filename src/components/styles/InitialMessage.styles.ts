import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const iconFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const InitialContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: calc(100vh - 200px);
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const MessageCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 15px 50px ${({ theme }) => theme.shadow};
  animation: ${bounceIn} 1s ease-out;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 193, 7, 0.1),
      transparent
    );
    animation: ${shimmer} 3s infinite;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const MessageIcon = styled.div`
  margin-bottom: 1.5rem;
  animation: ${iconFloat} 3s ease-in-out infinite;

  svg {
    filter: drop-shadow(0 4px 8px rgba(255, 193, 7, 0.3));
  }
`;

export const MessageText = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
  font-weight: 700;
  font-family: var(--font-poppins);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const CitiesSection = styled.div`
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
`;
