import React, { useEffect } from 'react';
import components from '../../components';
import { colors, fonts } from '../../constants';
const { Button, HeaderBackButton, Profile } = components;

import { Container, PleaseDeleteMe } from './styles';

export default function Details({ navigation, userType }) {
  useEffect(() => {
    navigation.setParams({ userType });
  }, []);

  return (
    <Container>
      <PleaseDeleteMe>Details Page</PleaseDeleteMe>
      <Button
        style={{ backgroundColor: colors.MAP_BACKGROUND_COLOR, marginTop: 10 }}
      >
        <PleaseDeleteMe
          style={{
            fontSize: fonts.FONT_SIZE_SMALL,
            color: colors.BACKGROUND_COLOR,
          }}
        >
          Details Page
        </PleaseDeleteMe>
      </Button>
    </Container>
  );
}

Details.navigationOptions = ({ navigationOptions, navigation }) => {
  return {
    headerStyle: { ...navigationOptions.headerStyle, marginHorizontal: 10 },
    headerLeft: props => <HeaderBackButton {...props} />,
    headerRight: () => <Profile {...navigation} />,
  };
};
