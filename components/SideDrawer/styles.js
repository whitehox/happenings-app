import styled from 'styled-components';

export const DrawerContainer = styled.TouchableOpacity`
  width: 100%;
  left: 0;
  height: 100%;
  background: #fff;
  border-color: #f1f1f1;
  border-width: 1;
  z-index: 9;
  padding-top: 50;
  padding-left: 10;
`;

export const ProfileDetails = styled.View`
  width: 90%;
  height: auto;
  padding-top: 30;
  padding-bottom: 30;
  align-items: center;
  font-family: noto-sans-bold;
  font-weight: bold;
`;

export const ProfileImage = styled.Image`
  padding-top: 10;
  border-width: 1;
  border-color: #f1f1f1;
  width: 100px;
  height: 100px;
  border-radius: 50;
  margin-bottom: 20;
`;
