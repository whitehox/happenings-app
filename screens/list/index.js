import React from "react";
import { View, Text } from "react-native";
import components from "../../components";
import { colors, fonts } from "../../constants";
const { Button } = components;

import { Container, TextMid } from "./styles";

const ListScreen = props => {
  return (
    <Container>
      <TextMid>Event List</TextMid>
    </Container>
  );
};

export default ListScreen;
