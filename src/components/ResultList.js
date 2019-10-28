import React from 'react'
import {FlatList, Text, View, StyleSheet} from 'react-native'

const ResultList = ({title,results}) => {

    return(
        <View>
            <Text style= {styles.title}>{title}</Text>
            <Text>{results.length}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    title:{ 
        fontSize: 18,
        fontWeight: 'bold'
    }
    });

export default ResultList;