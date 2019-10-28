import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
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

    console.log('he');
    useEffect(()=> {
        searchAPI('pasta');
    },[])
   

    // setResults("food");
return (
    <View >
        {(results.length > 0) ?
        <Text>We have : {results.length}</Text> : null}
        <SearchBar 
        onTermSubmit = {() => searchAPI(term) }
        onTermChanged = {(newTerm) => setTerm(newTerm)}/>
        <ResultList results = {filterResultsByPrice('$')} title = {'Cost Effective'}/>
        <ResultList results = {filterResultsByPrice('$$')} title = 'Bit Pricer'/>
        <ResultList results = {filterResultsByPrice('$$$')} title = 'Big Spender'/>
    </View>
);
};

const styles = StyleSheet.create({
title:{
    fontSize: 18,
    fontWeight: 'bold'
}
});

export default SearchScreen;