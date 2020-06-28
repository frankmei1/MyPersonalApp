import React, { Component } from "react";
import {Header, Icon} from "react-native-elements";
import styles from './styles';


export default function CustomedHeader({name, navigation}) {
    return (
        <Header
        backgroundColor = 'white'
        leftComponent={ <Icon
          name = 'menu'
          color = 'grey'
          onPress={() => navigation.openDrawer()}
        />}
        centerComponent={{ text: name, style: styles.centerComponent }}
        rightComponent={ <Icon
        name = 'home'
        color = 'grey'
        onPress={() => {
          navigation.navigate('Home');
        }}
      /> }
      />
    )
}