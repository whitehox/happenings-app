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
  styles,
  InfoText
} from "./styles";
const { eventCardStyle, eventImageStyle, eventInfoRow, eventFlex, iconStyle } = styles;
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
              <View style={eventFlex}>
                <Ionicons name="ios-navigate" size={22} style={iconStyle} />
                <InfoText>{location}</InfoText>
              </View>
              <View style={eventFlex}>
                <Ionicons name="ios-time" size={22} style={iconStyle} />
                <InfoText>{time}</InfoText>
              </View>
            </View>
            <View style={{...eventInfoRow, marginTop: 10}}>
              <View style={eventFlex}>
                <Ionicons name="ios-mal" size={22} style={iconStyle} />
                <InfoText>{attendees.length}+ interested</InfoText>
              </View>
              <View style={eventFlex}>
                <Ionicons name="ios-time" size={22} style={iconStyle} />
                <InfoText>{time}</InfoText>
              </View>
            </View>
          </EventMiniInfoView>
        </Card>
      </EventCardInfo>
    </Container>
  );
};

export default EventCard;
