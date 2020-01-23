import React from "react";
import { colors } from "../../constants";
import boxShadow from "../../utils/boxShadows";

import { Container } from "./styles";

export default Card = props => (
  <Container
    style={[
      boxShadow({ elevation: 1, color: colors.CARD_SHADOW_COLOR, width: 5, height: 5, opacity: 0.2, radius: 10 }),
      props.styles
    ]}
  >
    {props.children}
  </Container>
);
