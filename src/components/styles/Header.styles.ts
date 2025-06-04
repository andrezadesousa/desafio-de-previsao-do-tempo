import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px ${({ theme }) => theme.primary}40;
  }
  50% {
    box-shadow: 0 0 20px ${({ theme }) => theme.primary}60, 0 0 30px ${({
  theme,
}) => theme.primary}40;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.headerBackground};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadow};
  animation: ${slideDown} 0.5s ease-out;
  font-family: var(--font-inter);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const TimeSection = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  font-family: var(--font-poppins);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  z-index: 1;
`;

export const SearchInput = styled.input`
  padding: 0.75rem 3rem 0.75rem 2.5rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 25px;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
  width: 250px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  font-family: var(--font-inter);

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    animation: ${glow} 2s ease-in-out infinite;
    transform: scale(1.02);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 3.5rem;
  background: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => (theme.isDark ? "white" : "black")};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  width: 24px;
  height: 24px;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: scale(1.1);
  }
`;

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${({ theme }) => theme.shadow};

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => (theme.isDark ? "white" : "black")};
    transform: scale(1.1) rotate(180deg);
    box-shadow: 0 6px 25px ${({ theme }) => theme.primary}40;
  }
`;
