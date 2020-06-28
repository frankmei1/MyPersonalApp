import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../../components/MenuButton/MenuButton';

export default function DrawerContainer({navigation}) {
    return (
      <View style={styles.content}>
        <View style={styles.container}>
           
          <MenuButton
            title="Home"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />

           <MenuButton
            title="About Me"
            source={require('../../../assets/icons/information.png')}
            onPress={() => {
              navigation.navigate('About Me');
              navigation.closeDrawer();
            }}
          />

        </View>
      </View>
    );

}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
