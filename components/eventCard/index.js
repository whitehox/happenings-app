import React from "react";
import { Container, EventCardInfo, EventDate, EventDateBox, EventTitle } from "./styles";

const EventCard = props => {
  const { eventDay, eventTitle } = props;
  return (
    <Container>
      <EventDateBox>
        <EventDate>{eventDay}</EventDate>
      </EventDateBox>
      <EventCardInfo>
        <EventTitle>{eventTitle}</EventTitle>
      </EventCardInfo>
    </Container>
  );
};

export default EventCard;
