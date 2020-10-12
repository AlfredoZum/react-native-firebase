import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './src/pages/auth/container/login';
import HomePage from './src/pages/home/container/home';

import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  console.log( user )

  

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {
            user != null ?
            <>
              <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
              <Stack.Screen name="Home" component={HomePage} /> 
            </>
            : 
            <>
              <Stack.Screen name="Home" component={HomePage} /> 
            </>
          }
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
