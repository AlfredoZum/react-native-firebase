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

import auth from '@react-native-firebase/auth';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import styles from '../../../styles/app.style';

import HomePage from '../../home/container/home';

const LoginPage = ({ navigation }) =>  {

    authUser = function(){
    
        auth()
          .signInWithEmailAndPassword('alfredo.zum@gmail.com', '123456')
          .then(() => {
            console.log('User account created & signed in!');
            navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            //navigation.push('Home');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
    
            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }
    
          console.error(error);
        });
    
        /*auth()
          .createUserWithEmailAndPassword('alfredo.zum@gmail.com', '123456')
          .then(() => {
            console.log('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
    
            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }
    
          console.error(error);
        });*/
    
    }

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
                onPress={authUser}
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

}

export default LoginPage;