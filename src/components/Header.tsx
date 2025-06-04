"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Search, Sun, Moon } from "lucide-react";
import { setSearchTerm } from "../store/slices/weatherSlice";
import { useTheme } from "../context/ThemeContext";
import {
  HeaderContainer,
  DateTimeSection,
  RightSection,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ThemeToggle,
} from "./styles/Header.styles";

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateTime = now.toLocaleString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentDateTime(dateTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    dispatch(setSearchTerm(value.toLowerCase()));
  };

  return (
    <HeaderContainer>
      <DateTimeSection>{currentDateTime}</DateTimeSection>

      <RightSection>
        <SearchContainer>
          <SearchIcon>
            <Search size={18} />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search City"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </SearchContainer>

        <ThemeToggle onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </ThemeToggle>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
