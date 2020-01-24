import styled from 'styled-components/native';
import { colors } from '../../constants';

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 160px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_COLOR};
  border-radius: 10;
`;
