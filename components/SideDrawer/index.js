import React from 'react';
import { Text, View } from 'react-native';
import { DrawerContainer, ProfileImage, ProfileDetails } from './styles';
import { NavigationActions } from 'react-navigation';

function SideDrawer(props) {
  const navigateToScreen = route => () => {
    const navigationAction = NavigationActions.navigate({ routeName: route });
    props.navigation.dispatch(navigationAction);
  };
  return (
    <DrawerContainer>
      <ProfileDetails>
        <ProfileImage></ProfileImage>
        <Text style={{ fontFamily: 'poppins-regular' }}>Tega Oke</Text>
      </ProfileDetails>
      <View>
        <Text onPress={navigateToScreen('HomeScreen')}>Home</Text>
      </View>
    </DrawerContainer>
  );
}

export default SideDrawer;
