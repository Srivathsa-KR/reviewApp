/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNav} from './routes/DrawerNav'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () =>  {
  
  return (
  <NavigationContainer>
    <React.Fragment>
      {DrawerNav}
    </React.Fragment>
  </NavigationContainer>
  );
};



export default App;
