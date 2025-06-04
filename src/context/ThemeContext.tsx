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
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
  headerBackground: "rgba(248, 250, 252, 0.95)",
  cardBackground: "rgba(255, 255, 255, 0.9)",
  text: "#1e293b",
  textSecondary: "#64748b",
  primary: "#3b82f6",
  border: "rgba(148, 163, 184, 0.2)",
  shadow: "rgba(15, 23, 42, 0.08)",
  inputBackground: "rgba(255, 255, 255, 0.9)",
};

const darkTheme = {
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
  headerBackground: "rgba(15, 23, 42, 0.95)",
  cardBackground: "rgba(30, 41, 59, 0.8)",
  text: "#f1f5f9",
  textSecondary: "#94a3b8",
  primary: "#60a5fa",
  border: "rgba(148, 163, 184, 0.1)",
  shadow: "rgba(0, 0, 0, 0.25)",
  inputBackground: "rgba(30, 41, 59, 0.8)",
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
