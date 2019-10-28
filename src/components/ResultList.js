import React from 'react'
import {FlatList, Text, View, StyleSheet,TouchableOpacity} from 'react-native'
import ResultsDetails from './ResultsDetails';
import {withNavigation} from 'react-navigation';

const ResultList = ({title,results,navigation}) => {
    if(!results.length){
        return null;
    }
    return(
        <View>
            <Text style= {styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor= {result => result.id}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress= {()=> {navigation.navigate('ResultsShow',{'id':item.id})}}>
                    <ResultsDetails result ={item} />
                    </TouchableOpacity>
                    );
                    
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

export default withNavigation(ResultList);