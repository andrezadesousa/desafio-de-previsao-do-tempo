import styled from "styled-components";

const Card = styled.div<{ selected: boolean }>`
  padding: 1rem;
  margin: 0.5rem;
  border: 2px solid ${({ selected }) => (selected ? "#333" : "#ccc")};
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }
`;

interface Props {
  city: string;
  onClick: () => void;
  selected: boolean;
}

export const CityCard = ({ city, onClick, selected }: Props) => (
  <Card onClick={onClick} selected={selected}>
    {city}
  </Card>
);
