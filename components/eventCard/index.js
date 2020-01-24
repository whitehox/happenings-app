import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../card';
import Button from '../button';

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
  InfoText,
  Explore,
} from './styles';

const {
  eventCardStyle,
  eventImageStyle,
  eventInfoRow,
  eventFlex,
  iconStyle,
  exploreBtn,
} = styles;

import { ImageBackground } from 'react-native';

const EventCard = props => {
  const {
    icon,
    title,
    location,
    time,
    price,
    date,
    image,
    attendees,
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
        <FavEvent>
          <Ionicons name="ios-heart" size={30} color="#f9f9f9" />
        </FavEvent>
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
            <View style={{ ...eventInfoRow, marginTop: 8, paddingBottom: 15 }}>
              <View style={eventFlex}>
                <Ionicons name="ios-people" size={22} style={iconStyle} />
                <InfoText>{attendees.length}+ interested</InfoText>
              </View>
              <View style={eventFlex}>
                <Button style={exploreBtn}>
                  <Explore
                    onPress={() => props.navigation.navigate('DetailScreen')}
                  >
                    Explore
                  </Explore>
                </Button>
              </View>
            </View>
          </EventMiniInfoView>
        </Card>
      </EventCardInfo>
    </Container>
  );
};

export default EventCard;
