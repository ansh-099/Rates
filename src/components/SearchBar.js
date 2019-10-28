import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({onTermChanged,onTermSubmit}) => {

return (
    <View style= {styles.background}>
        <Feather name='search' style={styles.iconStyles}/>
        <TextInput 
        autoCorrect={false}
        onChangeText ={(newTerm) => {onTermChanged(newTerm)}}
        onEndEditing = {() => onTermSubmit()}
        placeholder='Search' size={30}
        style={{flex:1,marginLeft:5}}/>

    </View>
);
};

const styles = StyleSheet.create({
    background: {
        backgroundColor:'#F0EEEE',
        height:50,
        margin:15,
        borderRadius:5,
        flexDirection:'row'
    },
    iconStyles:{
        fontSize:30,
        alignSelf:'center',
        marginHorizontal:15

    }
});

export default SearchBar;