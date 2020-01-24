import React from 'react';
import { FlatList } from 'react-native';
import components from '../../components';

import { Container, LargeText } from './styles';
const { EventCard } = components;

import { EVENTS } from '../../data/dummy-data';

const ListScreen = props => {
  const renderEvents = itemData => {
    return <EventCard data={{ ...itemData.item }} {...props} />;
  };

  return (
    <Container>
      <LargeText>Events List</LargeText>
      <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={1}
        data={EVENTS}
        renderItem={renderEvents}
      />
    </Container>
  );
};

export default ListScreen;
