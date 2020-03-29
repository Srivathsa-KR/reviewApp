import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Header = ({navigation, title}) => {
    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={() => navigation.openDrawer()} />
            <View><Text style={styles.headerText}>{title}</Text></View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header : {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkslateblue'
    },
    headerText : {
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    icon : {
        position: 'absolute',
        left: 16
    }
})