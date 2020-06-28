import React, { Component } from "react";
import {Header, Icon} from "react-native-elements";
import styles from './styles';


export default function CustomedHeader({name, navigation}) {
    return (
        <Header
        leftComponent={ <Icon
          name = 'menu'
          color = 'white'
          onPress={() => navigation.openDrawer()}
        />}
        centerComponent={{ text: name, style: styles.centerComponent }}
        rightComponent={ <Icon
        name = 'home'
        color = 'white'
        onPress={() => {
          navigation.navigate('Home');
        }}
      /> }
      />
    )
}