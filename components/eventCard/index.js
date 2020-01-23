import React from "react";
import { View, Text } from "react-native";

import Card from "../card";
import {
  Container,
  EventCardInfo,
  EventDate,
  EventDateBox,
  EventImage,
  EventTitle,
  eventCardStyle,
  eventImageStyle,
  Month,
  Day,
  FavEvent,
  TitleView,
  EventMiniInfoView,
  eventInfoRow
} from "./styles";
import { ImageBackground } from "react-native";

const EventCard = props => {
  const {
    icon,
    title,
    location,
    time,
    price,
    date,
    image,
    attendees
  } = props.data;
  return (
    <Container>
      <EventDateBox>
        <EventDate>
          <Day>
            {date[0]}
            {date[1]}
          </Day>
          <Month>Feb</Month>
        </EventDate>
        <FavEvent></FavEvent>
      </EventDateBox>
      <EventCardInfo>
        <Card styles={eventCardStyle}>
          <EventImage>
            <ImageBackground
              source={{ uri: image }}
              style={eventImageStyle}
            >
              <TitleView>
                <EventTitle>{title}</EventTitle>
              </TitleView>
            </ImageBackground>
          </EventImage>
          <EventMiniInfoView>
            <View style={eventInfoRow}>
              <View>
                <Text>{location}</Text>
              </View>
            </View>
          </EventMiniInfoView>
        </Card>
      </EventCardInfo>
    </Container>
  );
};

export default EventCard;
