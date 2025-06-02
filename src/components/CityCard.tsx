// import styled from "styled-components";

// const Card = styled.div<{ selected: boolean }>`
//   padding: 1rem;
//   margin: 0.5rem;
//   border: 2px solid ${({ selected }) => (selected ? "#333" : "#ccc")};
//   cursor: pointer;

//   &:hover {
//     background: #f7f7f7;
//   }
// `;

// interface Props {
//   city: string;
//   onClick: () => void;
//   selected: boolean;
// }

// export const CityCard = ({ city, onClick, selected }: Props) => (
//   <Card onClick={onClick} selected={selected}>
//     {city}
//   </Card>
// );
import React from "react";
import styled from "styled-components";
import type { City } from "../utils/cities";
import { cities as allCities } from "../utils/cities";

interface CityGridProps {
  cities: City[];
  onSelect: (city: City) => void;
  selectedCityId?: number;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 1rem 2rem;
  background: #f5f5f5;
`;

const CityCard = styled.div<{ selected: boolean }>`
  padding: 1rem;
  background-color: ${({ selected }) => (selected ? "#1976d2" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  user-select: none;
  transition: background-color 0.2s;
  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;

export const CityGrid: React.FC<CityGridProps> = ({
  cities,
  onSelect,
  selectedCityId,
}) => {
  return (
    <Grid>
      {cities.map((city) => (
        <CityCard
          key={city.id}
          selected={city.id === selectedCityId}
          onClick={() => onSelect(city)}
          title={city.altNames.join(", ")}
        >
          {city.name}
        </CityCard>
      ))}
    </Grid>
  );
};
