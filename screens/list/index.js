import React from "react";
import { View, Text, FlatList } from "react-native";
import components from "../../components";
import { colors, fonts } from "../../constants";
const { Button } = components;

import { Container, LargeText, TextMid } from "./styles";

import { EVENTS } from "../../data/dummy-data";

const ListScreen = props => {
  const renderEvents = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
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
