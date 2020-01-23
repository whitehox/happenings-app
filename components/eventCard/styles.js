import styled from 'styled-components'
import {colors, fonts} from '../../constants';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.BACKGROUND_COLOR}
`;

export const EventDateBox = styled.View`
  border: 1px solid ${colors.BACKGROUND_COLOR}
`;

export const EventDate = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
`;

export const EventCardInfo = styled.View`
  border: 1px solid ${colors.BACKGROUND_COLOR}
`;

export const EventTitle = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-weight: ${fonts.FONT_WEIGHT_LIGHT};
`;