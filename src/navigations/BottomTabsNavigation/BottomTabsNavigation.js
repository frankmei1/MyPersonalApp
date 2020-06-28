import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Screens from '../Screens/Screens.js';
import JoinMe from '../../components/JoinMe/JoinMe.js';
import { Ionicons } from '@expo/vector-icons';
import CustomedHeader from '../../components/Header/Header.js';



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
      } else if (route.name === 'JoinMe') {
        iconName = focused
        ? 'ios-person-add'
        : 'ios-person-add';
      }

  return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'blue',
      }}
    >
        <Tab.Screen name="Home" component={Screens} options={{ header: props => <CustomedHeader name="JoinMe" navigation={props.navigation} /> }} />
        <Tab.Screen name="JoinMe" component={JoinMe}  options={{ header: props => <CustomedHeader name="JoinMe" navigation={props.navigation} /> }}/>
    </Tab.Navigator>
   )
}