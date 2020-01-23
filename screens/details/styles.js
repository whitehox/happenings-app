import styled from "styled-components";
import { colors, fonts } from "../../constants";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_COLOR};
`;

export const PleaseDeleteMe = styled.Text`
  font-size: ${fonts.FONT_SIZE_EXTRA_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  letter-spacing: 1;
  line-height: 36;
  color: ${colors.FONT_COLOR};
`;
