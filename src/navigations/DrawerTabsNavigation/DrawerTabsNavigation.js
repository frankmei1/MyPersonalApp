import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TabNavigator from '../BottomTabsNavigation/BottomTabsNavigation.js';
import DrawerContainer from './DrawerContainer/DrawerContainer.js'

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props => <DrawerContainer navigation = {props.navigation}/>}
    >
      <Drawer.Screen name='Tab' component={TabNavigator} />
    </Drawer.Navigator>
  )

}