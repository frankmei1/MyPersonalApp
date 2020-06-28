import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  TouchableHighlight,
  FlatList,

} from 'react-native';
import { Icon, Card } from 'react-native-elements'
import QingtianMei from '../../assets/profiles/QingtianMei.jpeg';
import styles from './styles'

function Item({ id, title, info, selected, onSelect }) {
  // const imageSource = '../assets/' + src;    
  return (
    <TouchableHighlight
      underlayColor = '#f0f'
      onPress={() => onSelect(id)}
    >
    <View style = {styles.itemcontainer}>
    <Image style={[styles.photo]} source={crossfit}/> 
    <Text style={styles.name}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <MenuButton
            style={styles.button}
            title="Learn More"
            source={require('../../assets/icons/category.png')}
          />
    </View>
    </TouchableHighlight>
  );
}

export default function AboutMe() {

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={QingtianMei} />
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.name}>Qingtian Mei</Text>
        <View style={styles.socialRow}>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook-with-circle"
              onPress={() => openURL("https://www.facebook.com/qingtian.mei")}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="brown"
              name="github-with-circle"
              onPress={() => openURL("https://github.com/frankmei1")}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => openURL("https://twitter.com/QingtianM")}
            />
          </View>

          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="linkedin-with-circle"
              onPress={() => openURL("https://www.linkedin.com/in/frank-mei/")}
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Card title="Profile Information" style = {{alignItems : 'center'}}>
              <Text style={styles.info}>Student / FrontEnd developer,</Text>
              <Text style={styles.school}> Brandeis University, </Text>
              <Text style={styles.major}>B.S Computer Science and Biology, </Text>
              <Text style={styles.info}>
                Student / FrontEnd developer
             </Text>
              <Text style={styles.description}>Qingtian Mei is currently a student at Brandeis University double majored in Computer Science, and Biology. He is currently a rising senior student.
              He has been interned in mutiple roles for FrontEnd Software Development during the summer time. He likes to fish and garden during his free time. Also, during the quarantine time, he enhanced his
              cooking skills.</Text>
            </Card>
          </View>
          <View style={styles.bodyContent}>
            <Card title="Profile Information">
            <FlatList
                horizontal = 'true' 
                data={items}
                renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.challenge}
                  info = {item.enrollment}
                />
            )}
          keyExtractor={item => item.id}
      />
            </Card>


          </View>
        </View>
      </ScrollView>

    </View>
  );
}
