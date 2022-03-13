import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RootNavigator } from '../types/type';
import { ProductProps } from '../interfaces/interface';
import products from '../data/products.json';

 


interface PropsNav { 
  navigation: NativeStackNavigationProp<RootNavigator>
}

export const HomeScreen = ({ navigation }: PropsNav ) => {


  const [prod , setProd] = useState<ProductProps[]>(products);


  return (
    <View style={s.container}>
       
    <View style={ { marginTop:30 }} >
      <FlatList
        data={prod} renderItem={({ item, index }) => {
          return (
            <View style={s.itemcontainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Details', { product: item })}>
                <Text style={s.item} >{item.title}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                <MaterialIcons name={"local-grocery-store"} style={s.iconItem} size={22} color="#7f8c8d" />
              </TouchableOpacity>
            </View>
          )
        }} />
        </View>
      </View>
  )
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  itemcontainer: {
    flexDirection: 'row',
    height: 55,     
  },
  item: {
    alignItems: 'center',
    fontFamily: 'Verdana',
    fontSize: 17,
    width: 300,

    marginTop: 10,
    padding: 10,
    borderWidth: 2,

    borderColor: "#dcdde1",
    color: 'black',
  },
  iconItem: {
    marginTop: 10,
    padding: 10, 
  }
});




