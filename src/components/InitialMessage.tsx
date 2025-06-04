"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import AvailableCities from "./AvailableCities";
import {
  InitialContainer,
  MessageCard,
  MessageText,
  MessageIcon,
  ContentWrapper,
  CitiesSection,
} from "./styles/InitialMessage.styles";
import { MapPin } from "lucide-react";

const InitialMessage = () => {
  const { cities } = useSelector((state: RootState) => state.weather);

  return (
    <InitialContainer>
      <ContentWrapper>
        <MessageCard>
          <MessageIcon>
            <MapPin size={48} color="#ffc107" />
          </MessageIcon>
          <MessageText>
            Escolha uma cidade para visualizar a previsão completa
          </MessageText>
        </MessageCard>

        <CitiesSection>
          <AvailableCities />
        </CitiesSection>
      </ContentWrapper>
    </InitialContainer>
  );
};

export default InitialMessage;
