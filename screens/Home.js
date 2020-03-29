import React, {useState}from 'react'
import {View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from '../stylesContainer/globalStyles'

const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([{key: "1", title: 'Paakashala', body: 'Lorem Ipsum', rating : 3.5 },
     {key: "2", title: 'Nisarga', body: 'Lorem Ipsum', rating : 4 }, 
     {key: "3", title: 'Gokul', body: 'Lorem Ipsum', rating : 3.75 }])
    return (
        <View style={globalStyles.container}>
           <View style={{borderColor:'#000', borderWidth: 1, marginBottom: 10}}><Text>Home</Text></View>
           <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                       <Text>{item.title}</Text> 
                    </TouchableOpacity>
                )}
            />
       </View>
    );
};

export default Home

