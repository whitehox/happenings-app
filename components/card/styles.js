import styled from "styled-components";
import { colors } from "../../constants";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 160;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_COLOR};
  border-radius: 10;
`;
