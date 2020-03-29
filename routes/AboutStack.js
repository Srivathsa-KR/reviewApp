import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {About }from '../screens/About.js'
import Header from '../shared/Header'

const Stack = createStackNavigator();

export const AboutStack = () =>{
    return    (
            <Stack.Navigator screenOptions={{headerStyle: {
                height: 80, 
                backgroundColor: '#aaa',
            }}}>
                <Stack.Screen name="About" options={{header: ({navigation}) => <Header navigation={navigation} title="About"/>}}component={About}  />
            </Stack.Navigator>
        )
}