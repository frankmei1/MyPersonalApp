import React ,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import styles from './styles';
import { useAsyncStorage } from '@react-native-community/async-storage';


export default function SubscribeMe({ route, navigation }) {
    const [value, setValue] = useState("");
    const { getItem, setItem } = useAsyncStorage('Counter');
    const [lastName, setLastName] = React.useState('')
    const [firstName, setFirstName] = React.useState('');
    const [interest, setInterest] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const readItemFromStorage = async () => {
      const item = await getItem();
      setValue(JSON.parse(item)||value); // if item=="null", then just use value
    };

    const writeItemToStorage = async newValue => {
      await setItem(JSON.stringify(newValue));
      setValue(newValue);
      
    };
  
    useEffect(() => {
      readItemFromStorage();
    }, []);
  
    const createNewMember = () =>{
        const member = {id: value.length + 1, firstName: firstName, lastName: lastName, email: email, phone: phone, interest:interest}
        writeItemToStorage(value.concat(member))

      }

    return (
        <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              mode = 'outlined'
              placeholder="First Name"
              keyboardType="default"
              onChangeText={(firstName) => setFirstName(firstName)}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Last Name"
              secureTextEntry={false}
              underlineColorAndroid='transparent'
              onChangeText={(lastName) => setLastName({lastName})}/>
        </View>

         <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email Address"
              secureTextEntry={false}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => setEmail(email)}/>
        </View>
         <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Phone Number"
              secureTextEntry={false}
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(phone) => setPhone(phone)}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Interests"
              secureTextEntry={false}
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(interest) => setInterest(interest)}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => {createNewMember();
                                                                                                  navigation.navigate('Home');}}>
          <Text style={styles.signUpText}>SubScribe Me</Text>
        </TouchableHighlight>
    </View>
    );
}

