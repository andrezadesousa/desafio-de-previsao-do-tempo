"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Search, X, Sun, Moon } from "lucide-react";
import { setSearchTerm } from "../store/slices/weatherSlice";
import { useTheme } from "../context/ThemeContext";
import {
  NavContainer,
  Logo,
  TimeDisplay,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ClearButton,
  ThemeToggle,
} from "./styles/Navbar.styles";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    dispatch(setSearchTerm(value.toLowerCase()));
  };

  const clearSearch = () => {
    setSearchValue("");
    dispatch(setSearchTerm(""));
  };

  return (
    <NavContainer>
      <Logo>Globalsys</Logo>
      <TimeDisplay>{currentTime}</TimeDisplay>
      <SearchContainer>
        <SearchIcon>
          <Search size={20} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        {searchValue && (
          <ClearButton onClick={clearSearch}>
            <X size={16} />
          </ClearButton>
        )}
        <ThemeToggle onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </ThemeToggle>
      </SearchContainer>
    </NavContainer>
  );
};

export default Navbar;
