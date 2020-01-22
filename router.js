import { createAppContainer } from 'react-navigation';
import { customHeaderStyle } from './constants';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Screens from './screens';
import SideDrawer from './components/SideDrawer';

const AppNavigator = createDrawerNavigator(
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
    contentComponent: SideDrawer,
    drawerWidth: 300,
  },
);

export default AppRoutes = createAppContainer(AppNavigator);
