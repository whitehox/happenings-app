import styled from "styled-components";
import { fonts, colors } from "../../constants";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
`;

export const EventDateBox = styled.View`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25%;
  align-items: center;
`;

export const EventDate = styled.View`
  padding: 10px;
  background-color: ${colors.CALENDAR_COLOR};
  border-radius: 5px;
`;

export const Day = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  color: ${colors.WHITE};
`;

export const Month = styled.Text`
  font-size: ${fonts.FONT_SIZE_SMALL};
  color: ${colors.WHITE};
`;

export const FavEvent = styled.View`
  background-color: ${colors.FAV_COLOR};
  border-radius: 100;
  width: 50px;
  height: 50px;
  margin-top: 10;
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

export const eventCardStyle = {
  borderRadius: 5,
  height: 200
};
