import { createAppContainer } from 'react-navigation';
import { customHeaderStyle } from './constants';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Screens from './screens';
import SideDrawer from './components/SideDrawer';

const EventNavigator = createStackNavigator(
  {
    // Home Route
    HomeScreen: { screen: Screens.HomeScreen },
    // List Route
    ListScreen: { screen: Screens.ListScreen }
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerStyle: customHeaderStyle,
    },
  },
);

const AppNavigator = createDrawerNavigator({
  Event: EventNavigator
},
{
  contentComponent: SideDrawer,
  drawerWidth: 300,
}
)

export default AppRoutes = createAppContainer(AppNavigator);
