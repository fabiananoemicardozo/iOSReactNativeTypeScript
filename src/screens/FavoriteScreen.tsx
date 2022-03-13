import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootNavigator } from '../types/type'
import { DetailsScreen } from './DetailsScreen';

interface Props{
  producto: any
}

interface PropsNav { 
    navigation: NativeStackNavigationProp<RootNavigator>
    route: any
  }
  
export const FavoriteScreen = ({ route, navigation}: PropsNav, { producto}: Props) => {

  const [favorite, setFavorite] = useState();
    const { product } = route.params;

  useFocusEffect(() => {
    getData();
  })
  const getData = async () => {
    try{
      AsyncStorage.getItem('FavoriteMovies').then(value => {
        if (value != null){
          setFavorite(JSON.parse(value));
        }
      });
    }catch (error){
      console.log(error);
    }
  };

  return (
    {/* <FlatList
      data={favorite}
      keyExtractor={(item, index) => 'key' + index }
      renderItem={({item}) => {
        return <DetailsScreen producto={item} navigation={navigation}/> 
      }} /> */}
      
  )
}




  


