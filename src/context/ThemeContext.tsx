"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  isDark: false,
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)",
  headerBackground: "rgba(255, 255, 255, 0.95)",
  cardBackground: "rgba(255, 255, 255, 0.9)",
  text: "#212529",
  textSecondary: "#6c757d",
  primary: "#ffc107",
  primaryHover: "#ffb300",
  border: "rgba(255, 193, 7, 0.2)",
  shadow: "rgba(0, 0, 0, 0.1)",
  inputBackground: "rgba(255, 255, 255, 0.9)",
  accent: "#ffc107",
  success: "#28a745",
  warning: "#ffc107",
  error: "#dc3545",
};

const darkTheme = {
  isDark: true,
  background: "linear-gradient(135deg, #212529 0%, #343a40 50%, #495057 100%)",
  headerBackground: "rgba(33, 37, 41, 0.95)",
  cardBackground: "rgba(52, 58, 64, 0.8)",
  text: "#f8f9fa",
  textSecondary: "#adb5bd",
  primary: "#ffc107",
  primaryHover: "#ffb300",
  border: "rgba(255, 193, 7, 0.2)",
  shadow: "rgba(0, 0, 0, 0.3)",
  inputBackground: "rgba(52, 58, 64, 0.8)",
  accent: "#ffc107",
  success: "#28a745",
  warning: "#ffc107",
  error: "#dc3545",
};

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
