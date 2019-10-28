import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {

const id = navigation.getParam('id');

const [result,setResult] = useState(null);

const getResults = async (id) => {
    const response =  await yelp.get(`/${id}`);
    setResult(response.data);
}
console.log(result);
useEffect(() => {
    getResults(id);
},[]);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList 
            showsVerticalScrollIndicator = {false}
            data = {result.photos}
            keyExtractor = {photo => photo}
            renderItem = { ({item}) => {
                return (
                    <Image style= {styles.image} source={{uri:item}}/>
                );
            }
            }
            />
        </View>
    );
};

const styles = StyleSheet.create({
image:{
    height:250,
    width:250,
    margin:15,
    borderRadius:4
},
title:{
    fontSize:18,
    fontWeight:'bold',
    alignSelf:'center'
}
});

export default ResultsShowScreen;