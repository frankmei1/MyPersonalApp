import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Screens from '../Screens/Screens.js';
import JoinMe from '../../components/AboutMe/AboutMe.js';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


export default function BottomTabsNavigation(){
    
   return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Home') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'Setting') {
        iconName = focused
        ? 'ios-list-box'
        : 'ios-list';
      }

  return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'blue',
      }}
    >
        <Tab.Screen name="Home" component={Screens} />
        <Tab.Screen name="JoinMe" component={JoinMe} />
    </Tab.Navigator>
   )
}