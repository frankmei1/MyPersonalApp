import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Screens from '../Screens/Screens.js';
import JoinMe from '../../components/JoinMe/JoinMe.js';
import { Ionicons } from '@expo/vector-icons';
import CustomedHeader from '../../components/Header/Header.js';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles.js'


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

 function TabScreens({props}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitleStyle
      }}
    >
      <Stack.Screen name="JoinMe" component={JoinMe} options={{ header: props => <CustomedHeader name="JoinMe" navigation={props.navigation} /> }}/>
    </Stack.Navigator>
  )
}




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
        <Tab.Screen name="Home" component={Screens} />
        <Tab.Screen name="JoinMe" component={TabScreens} />
    </Tab.Navigator>
   )
}