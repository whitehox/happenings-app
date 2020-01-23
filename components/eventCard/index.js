import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../card";
import {
  Container,
  EventCardInfo,
  EventDate,
  EventDateBox,
  EventImage,
  EventTitle,
  Month,
  Day,
  FavEvent,
  TitleView,
  EventMiniInfoView,
  styles
} from "./styles";
const { eventCardStyle, eventImageStyle, eventInfoRow, eventLocation } = styles;
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
            <ImageBackground source={{ uri: image }} style={eventImageStyle}>
              <TitleView>
                <EventTitle>{title}</EventTitle>
              </TitleView>
            </ImageBackground>
          </EventImage>
          <EventMiniInfoView>
            <View style={eventInfoRow}>
              <View style={eventLocation}>
                <Ionicons name="ios-navigate" size={20} />
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
