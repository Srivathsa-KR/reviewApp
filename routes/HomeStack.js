import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header'

const Stack = createStackNavigator();


export const HomeStack = () => {
   return (<Stack.Navigator screenOptions={{headerStyle: {
    height: 80, 
    backgroundColor: '#aaa',
  },
  headerTitleStyle: {
      letterSpacing: 1
  }}}>
      <Stack.Screen name="Home" options={{header: ({navigation}) => <Header navigation={navigation} title="Home"/>}}component={Home} />
      <Stack.Screen name="ReviewDetails" options={({route}) => ({title : route.params.title}) } component={ReviewDetails} />
    </Stack.Navigator>)
}


