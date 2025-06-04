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

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;

  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  animation: ${slideDown} 0.5s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const DateTimeSection = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1rem;
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
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
  width: 250px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
    transform: scale(1.02);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.05);
  }
`;
