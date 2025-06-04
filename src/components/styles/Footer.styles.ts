import styled, { keyframes } from "styled-components";

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

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.headerBackground};
  backdrop-filter: blur(20px);
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 1.5rem 2rem;
  text-align: center;
  margin-top: 2rem;
  animation: ${fadeInUp} 0.6s ease-out;
  font-family: var(--font-inter);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const FooterHighlight = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-family: var(--font-poppins);
`;
