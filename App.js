import React,{useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { authentication } from './Firebase/Firebase-config';
import { db } from './Firebase/Firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';


const App = () => {

  const GetData = async ()=>{
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    console.log(cityList);
  }

  return (

      <View style={styles.MainContainer}>
        <Button title='Getdata' onPress={GetData} />
      </View>
  
  );
};

const styles = StyleSheet.create({
 MainContainer: {
  flex: 1,
  alignContent: 'center',
  padding: 10,
  justifyContent: 'center'
 }
});

export default App;
