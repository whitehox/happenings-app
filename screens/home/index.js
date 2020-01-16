import React from "react";
import components from "../../components";
import { colors, fonts } from "~/constants";
const { Button } = components;

import { Container, PleaseDeleteMe } from "./styles";

export default Home = props => {
  return (
    <Container>
      <PleaseDeleteMe>Please Delete Me</PleaseDeleteMe>
      <Button
        style={{ backgroundColor: colors.MAP_BACKGROUND_COLOR, marginTop: 10 }}
      >
        <PleaseDeleteMe
          style={{
            fontSize: fonts.FONT_SIZE_MEDIUM,
            color: colors.BACKGROUND_COLOR
          }}
        >
          Click Here
        </PleaseDeleteMe>
      </Button>
    </Container>
  );
};
