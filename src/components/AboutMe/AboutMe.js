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
import movieData from '../../assets/profiles/bestMovies/bestMovies'
import QingtianMei from '../../assets/profiles/QingtianMei.jpeg';
import { useAsyncStorage } from '@react-native-community/async-storage';
import styles from './styles'

function Item({ id, title, time, img}) {
  // const imageSource = '../assets/' + src;    
  return (
    <TouchableHighlight
      underlayColor = '#f0f'
    >
    <View style = {styles.itemcontainer}>
    <Image style={[styles.photo]} source={{uri: img.src}}/> 
    <Text style={styles.name}>{title},<Text style={styles.major}> {time} </Text></Text>
  
    </View>
    </TouchableHighlight>
  );
}

export default function AboutMe() {
  const { getItem, setItem } = useAsyncStorage('Counter');
  const [value, setValue] = React.useState("");

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(JSON.parse(item)||value); // if item=="null", then just use value
  };

  React.useEffect(() => {
    readItemFromStorage();
  }, []);

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
        <Text style={styles.name}>Subscribers: {value.length}</Text>
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
          <View style={styles.movie}>
            <Card title="Favorite Moives">
            <FlatList
                horizontal = 'true' 
                showsHorizontalScrollIndicator={false}
                data={movieData}
                renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.name}
                  time = {item.time}
                  img = {item.img}
                />
            )}
          keyExtractor={item => item.id}
      />
            </Card>


          </View>
          <View style={styles.movie}>
            <Card title="Favorite Moives">
            <FlatList
                horizontal = 'true' 
                showsHorizontalScrollIndicator={false}
                data={movieData}
                renderItem={({ item }) => (
                  console.log(item),
                <Item
                  id={item.id}
                  title={item.name}
                  time = {item.time}
                  img = {item.img}
                />
            )}
          keyExtractor={item => item.id}
      />
            </Card>


          </View>
          <View style={styles.movie}>
            <Card title="Favorite Moives">
            <FlatList
                horizontal = 'true' 
                showsHorizontalScrollIndicator={false}
                data={movieData}
                renderItem={({ item }) => (
                  console.log(item),
                <Item
                  id={item.id}
                  title={item.name}
                  time = {item.time}
                  img = {item.img}
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
