import styled from "styled-components";
import { colors, fonts } from "../../constants";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_COLOR};
`;

export const TextMid = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
`;

export const LargeText = styled.Text`
  font-size: ${fonts.FONT_SIZE_EXTRA_LARGE};
  font-family: ${fonts.FONT_FAMILY_BOLD};
  text-align: left;
  width: 50%;
  margin-bottom: 10px
`;