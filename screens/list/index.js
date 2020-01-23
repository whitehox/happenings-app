import React from "react";
import { FlatList } from "react-native";

import EventCard from '../../components/eventCard';

import { Container, LargeText, TextMid } from "./styles";

import { EVENTS } from "../../data/dummy-data";

const ListScreen = props => {
  const renderEvents = itemData => {
    return (
      <EventCard eventDay={itemData.item.date} eventTitle={itemData.item.title} />
    )
  }

  return (
    <Container>
      <LargeText>Event List</LargeText>
      <FlatList keyExtractor={(item, index) => item.id} numColumns={1} data={EVENTS} renderItem={renderEvents} />
    </Container>
  );
};

export default ListScreen;
