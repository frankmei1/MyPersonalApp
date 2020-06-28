import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CustomedHeader from '../../components/Header/Header.js';
import Home from '../../components/Home/Home.js';
import AboutMe from "../../components/AboutMe/AboutMe.js";
import styles from './styles';


const Stack = createStackNavigator();

export default function Screens({props}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ header: props => <CustomedHeader name="Home" navigation={props.navigation} /> }} />
      <Stack.Screen name="About Me" component={AboutMe} options={{ header: props => <CustomedHeader name="Mei" navigation={props.navigation} /> }}/>

    </Stack.Navigator>
  )
}




console.disableYellowBox = true;
