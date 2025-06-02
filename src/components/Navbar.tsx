import styled from "styled-components";
import { useState, useEffect } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f0f0f0;
`;

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export const Navbar = ({ search, setSearch }: Props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Nav>
      <div>{time.toLocaleTimeString("pt-BR")}</div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && <button onClick={() => setSearch("")}>x</button>}
    </Nav>
  );
};
