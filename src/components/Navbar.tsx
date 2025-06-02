"use client";

import type React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// Import Lucide icons
import { Search, X, Sun, Moon, Clock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../styles/theme";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 26, 130, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 26, 130, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 26, 130, 0.3);
  }
`;

const NavContainer = styled.nav<{ isDark: boolean }>`
  background: ${(props) =>
    props.isDark ? darkTheme.surface : lightTheme.surface};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid
    ${(props) => (props.isDark ? darkTheme.border : lightTheme.border)};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  animation: ${slideDown} 0.6s ease-out;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const TimeDisplay = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => (props.isDark ? darkTheme.text : lightTheme.text)};

  svg {
    color: #ff1a82;
    animation: ${glow} 2s infinite;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input<{ isDark: boolean }>`
  background: ${(props) =>
    props.isDark ? darkTheme.background : lightTheme.background};
  border: 2px solid
    ${(props) => (props.isDark ? darkTheme.border : lightTheme.border)};
  border-radius: 25px;
  padding: 0.75rem 1rem 0.75rem 3rem;
  font-size: 1rem;
  color: ${(props) => (props.isDark ? darkTheme.text : lightTheme.text)};
  width: 300px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${(props) =>
      props.isDark ? darkTheme.textSecondary : lightTheme.textSecondary};
    font-style: italic;
  }

  &:focus {
    outline: none;
    border-color: #ff1a82;
    box-shadow: 0 0 0 3px rgba(255, 26, 130, 0.1);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 1rem;
  color: #ff1a82;
  z-index: 1;
`;

const ClearButton = styled.button<{ isDark: boolean }>`
  position: absolute;
  right: 0.5rem;
  background: none;
  border: none;
  color: ${(props) =>
    props.isDark ? darkTheme.textSecondary : lightTheme.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 26, 130, 0.1);
    color: #ff1a82;
    transform: scale(1.1);
  }
`;

const ToggleThemeButton = styled.button<{ isDark: boolean }>`
  background: none;
  border: 2px solid ${(props) => (props.isDark ? "#fff" : "#333")};
  border-radius: 25px;
  padding: 0.5rem 1rem;
  color: ${(props) => (props.isDark ? "#fff" : "#333")};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    color: #ff1a82;
  }

  &:hover {
    background: #ff1a82;
    color: #fff;

    svg {
      color: #fff;
    }
  }
`;

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  const [searchValue, setSearchValue] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <NavContainer isDark={isDark}>
      <NavContent>
        <TimeDisplay isDark={isDark} title="Current Time">
          <Clock size={20} />
          {currentTime.toLocaleTimeString()}
        </TimeDisplay>

        <RightSection>
          <SearchContainer>
            <SearchIcon size={20} />
            <SearchInput
              isDark={isDark}
              type="text"
              placeholder="Search cities..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <ClearButton
                isDark={isDark}
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                <X size={18} />
              </ClearButton>
            )}
          </SearchContainer>

          <ToggleThemeButton isDark={isDark} onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </ToggleThemeButton>
        </RightSection>
      </NavContent>
    </NavContainer>
  );
};
