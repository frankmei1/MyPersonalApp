import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements'
import QingtianMei from '../../assets/profiles/QingtianMei.jpeg';
import styles from './styles'

export default function AboutMe() {

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={ QingtianMei}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Qingtian Mei</Text>
              <View style={styles.socialRow}>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook-with-circle"
              onPress={() => console.log('facebook')}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log('twitter')}
            />
          </View>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#DD4C39"
              name="google--with-circle"
              onPress={() => console.log('google')}
            />
         </View>
              <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="linkedin-with-circle"
              onPress={() => console.log('linkedin')}
            />
         </View>
         </View>
              <Text style={styles.info}>Student / FrontEnd developer,  
                    <Text style={styles.school}> Brandeis University, </Text> 
              </Text>
             <Text style={styles.info}>                    
                   <Text style={styles.major}>B.S Computer Science and Biology, </Text>
                    Student / FrontEnd developer
             </Text>
              <Text style={styles.description}>Qingtian Mei is currently a student at Brandeis University double majored in Computer Science, and Biology. He is currently a rising senior student. 
              He has been interned in mutiple roles for FrontEnd Software Development during the summer time. He likes to fish and garden during his free time. Also, during the quarantine time, he enhanced his
              cooking skills.</Text>
            </View>
        </View>
      </View>
    );
  }
