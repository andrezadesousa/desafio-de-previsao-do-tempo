// import styled from "styled-components";
// import { useState, useEffect } from "react";

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   padding: 1rem;
//   background: #f0f0f0;
// `;

// interface Props {
//   search: string;
//   setSearch: (value: string) => void;
// }

// export const Navbar = ({ search, setSearch }: Props) => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Nav>
//       <div>{time.toLocaleTimeString("pt-BR")}</div>
//       <input
//         type="text"
//         placeholder="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {search && <button onClick={() => setSearch("")}>x</button>}
//     </Nav>
//   );
// };
import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: #1976d2;
  color: white;
`;

const Clock = styled.div`
  font-weight: bold;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 0.4rem 1.5rem 0.4rem 0.5rem;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: bold;
`;

export const Navbar: React.FC<NavbarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NavbarContainer>
      <Clock>{time}</Clock>
      <SearchWrapper>
        <Input
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        {searchTerm && (
          <ClearButton onClick={() => setSearchTerm("")}>x</ClearButton>
        )}
      </SearchWrapper>
    </NavbarContainer>
  );
};
