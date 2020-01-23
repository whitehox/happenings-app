import styled from 'styled-components'
import {colors, fonts} from '../../constants';

export const Container = styled.View`
  flex-direction: row;
  border: 1px solid;
  width: 100%;
  justify-content: space-between;
`;

export const EventDateBox = styled.View`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25%;
`;

export const EventDate = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
`;

export const EventCardInfo = styled.View`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 75%;
`;

export const EventTitle = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-weight: ${fonts.FONT_WEIGHT_LIGHT};
`;