import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.cardBackground};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0;
`;

export const TimeDisplay = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 25px;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
  width: 200px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  pointer-events: none;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 3rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
  }
`;
