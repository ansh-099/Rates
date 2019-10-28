import React from 'react'
import {FlatList, Text, View, StyleSheet} from 'react-native'
import ResultsDetails from './ResultsDetails';

const ResultList = ({title,results}) => {

    return(
        <View>
            <Text style= {styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor= {result => result.id}
            renderItem = {({item}) =>{
                return <ResultsDetails result ={item} />;
            }

            }
            />
        </View>
    );
};


const styles = StyleSheet.create({
    title:{ 
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:8,
        marginTop:5
    }
    });

export default ResultList;