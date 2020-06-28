import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/DrawerTabsNavigation/DrawerTabsNavigation.js'

export default function App() {
  return (
   
      <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

