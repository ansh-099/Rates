import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import { Logs } from 'expo';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price == price);
    };
    const searchAPI= async (value) => {
        try{
        const response = await yelp.get('/search',{
            params:{
                limit: 50,
                term:value,
                location: 'san jose'
            }
        }
        );
        console.log(term);
        // console.log(response.data.businesses);
        setResults(response.data.businesses);

        if(response.ok){
            console.log(response.data.businesses);
        }
    }
    catch(err){
        console.log(err);
    }
    };

    useEffect(()=> {
        searchAPI('pasta');
    },[])
   

    // setResults("food");
return (
    <>
        {/* {(results.length > 0) ? <Text>We have : {results.length}</Text> : null} */}
        <SearchBar 
        onTermSubmit = {() => searchAPI(term) }
        onTermChanged = {(newTerm) => setTerm(newTerm)}/>

        <ScrollView>

        <ResultList
        results = {filterResultsByPrice('$')} title = {'Cost Effective'}/>
        <View style={styles.view}/>

        <ResultList
        results = {filterResultsByPrice('$$')} title = 'Bit Pricer'/>
        <View style={styles.view}/>

        <ResultList
        results = {filterResultsByPrice('$$$')} title = 'Big Spender'/>
        <View style={styles.view}/>

        </ScrollView>
    </>
);
};

const styles = StyleSheet.create({
title:{
    fontSize: 18,
    fontWeight: 'bold'
},
view:{
    backgroundColor:'#F0EEEE',
    height:1.3,
    left:15,
    right:15,
    marginTop:5,
    marginBottom:3
    }
}
);

export default SearchScreen;