import React from 'react'
import {View,Image,Text, StyleSheet} from 'react-native'


const ResultsDetails = ({result}) => {
return (
    <View style = {styles.container}>
        <Image style = {styles.image} source={{uri:result.image_url}} />
        <Text style={styles.name} >{result.name}</Text>
        <Text>{result.rating} Starts, {result.review_count} Reviews</Text>
    </View>
);
};

const styles = StyleSheet.create({
image:{
    width:250,
    height: 120,
    borderRadius:4,

},
name:{
    fontWeight:'bold',
    marginTop:2
},
container:{
    marginLeft:15,
}
});

export default ResultsDetails;