import React from "react";
import { colors } from "../../constants";
import boxShadow from "../../utils/boxShadows";

import { Container } from "./styles";

export default Card = props => (
  <Container
    style={[
      boxShadow({ elevation: 1, color: colors.CARD_SHADOW_COLOR }),
      props.styles
    ]}
  >
    {props.children}
  </Container>
);
