import React from "react";

import Card from "../card";
import {
  Container,
  EventCardInfo,
  EventDate,
  EventDateBox,
  EventTitle,
  eventCardStyle,
  Month,
  Day,
  FavEvent
} from "./styles";

const EventCard = props => {
  const { eventDay, eventTitle } = props;
  return (
    <Container>
      <EventDateBox>
        <EventDate>
          <Day>
            {eventDay[0]}
            {eventDay[1]}
          </Day>
          <Month>Feb</Month>
        </EventDate>
        <FavEvent></FavEvent>
      </EventDateBox>
      <EventCardInfo>
        <Card styles={eventCardStyle}>
          <EventTitle>{eventTitle}</EventTitle>
        </Card>
      </EventCardInfo>
    </Container>
  );
};

export default EventCard;
