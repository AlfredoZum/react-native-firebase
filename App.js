import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import styles from './src/styles/app.style';

const App: () => React$Node = () => {

  /*
  firebase.auth().onAuthStateChanged( user => {
    console.log( user );
  });
  */

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          
          <View style={styles.header} >
            <Text style={styles.headerText} >Firebase Autenticacion</Text>
          </View>

          <View style={styles.formGroup} >
            <FontAwesomeIcon style={styles.iconInput} icon={ faUser } size={ 22 } />
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>

          <View style={styles.formGroup} >
            <FontAwesomeIcon style={styles.iconInput} icon={ faLock } size={ 22 } />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
          </View>

          <TouchableOpacity
            onPress={() => console.log('Simple Button pressed')}
            style={ styles.button } >
              <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Simple Button pressed')}
            style={ styles.button } >
              <Text style={styles.loginText}>Login with gmail</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
