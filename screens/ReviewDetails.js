import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet } from 'react-native'
import {globalStyles} from '../stylesContainer/globalStyles'


const ReviewDetails = ({route}) => {
    const { title, body, rating} = route.params;
    return (
        <View style={globalStyles.container}>
           <Text>{title}</Text>
           <Text>{rating}</Text>
           <Text>{body}</Text>
       </View>
    )
}



export default ReviewDetails

