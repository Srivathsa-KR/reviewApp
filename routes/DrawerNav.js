import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStack} from './HomeStack';
import {AboutStack} from './AboutStack';

const Drawer = createDrawerNavigator();

export const DrawerNav = (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
)