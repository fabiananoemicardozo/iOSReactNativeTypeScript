
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { RootNavigator } from '../types/type'

interface PropsNav {
  navigation: NativeStackNavigationProp<RootNavigator>
  route: any
}

export const DetailsScreen = ({ route, navigation }: PropsNav) => {

  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState<boolean>();

  //check fav
  useEffect(() => {
    console.log("test")
    AsyncStorage.getItem("favoritos")
      .then(v => {
        console.log(v);
        let favoritesParce = (JSON.parse(v || "[]")).find((f: string) => f === product.title)
        if (favoritesParce) setIsFavorite(true)
        else setIsFavorite(false)
      })
  }, [setIsFavorite])


  const addFavorite = async () => {
    let favoritos = await AsyncStorage.getItem("favoritos");

    let favoritesParce = (JSON.parse(favoritos || "[]"))
    favoritesParce.push(product.title)
    setIsFavorite(true)
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesParce))
    console.log(favoritos, favoritesParce);
  }

  const removeFavorite = async () => {
    let favoritos = await AsyncStorage.getItem("favoritos");

    let favoritesParce = (JSON.parse(favoritos || "[]")).filter((f: string) => f !== product.title)
    setIsFavorite(false)
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesParce))
    console.log(favoritos, favoritesParce);
  }




  return (
    <ScrollView style={s.container}>

      <Text style={s.category}>Product detail</Text>

      <View style={s.item}>

        <Image source={require('../assets/images/datterino.jpg')} style={s.image} />

        <MaterialCommunityIcons
          name={isFavorite ? "cards-heart" : "cards-heart-outline"}
          onPress={() => isFavorite ? removeFavorite() : addFavorite()}
          size={35}
          color={isFavorite ? "#eb2f06" : "#b2bec3"}
          style={s.iconItem}
        />

        <Text style={s.price}>Є {product.price}</Text>

        <View style={s.titleContainer}>
          <Text style={s.title}>{product.title}</Text>
          <Text style={s.rating}>
            <MaterialIcons name={"star"} size={20} color="#FFC312" />
            {product.rating}
          </Text>
        </View>

        <Text style={s.description}>{product.description}</Text>
      </View>
      <View style={s.viewPayment}>
        <Text style={s.type}>{product.type}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <MaterialIcons name={"local-grocery-store"} style={s.PaymentItem} size={22} color='#ffd338' />
        </TouchableOpacity>
      </View>

    </ScrollView>

  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  navView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    marginLeft: -10,
    marginRight: -10,
    marginBottom: -20,
    height: 60,
    backgroundColor: '#ffd338',
  },
  textNav: {
    fontSize: 20,
    paddingHorizontal: 24,
    textAlign: 'center',
    color: '#ffffff',
  },
  category: {
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'verdana',
    fontSize: 30,

    color: '#3d3d3d',
  },
  item: {
    marginTop: 10,
    padding: 10,
  },
  image: {
    marginTop: -25,
    width: 300,
    height: 300,
    marginBottom: -50,
  },
  price: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    fontSize: 20,

    color: '#000000',
  },
  rating: {
    fontFamily: 'verdana',
    fontSize: 18,
    marginLeft: 10,
  },
  description: {
    fontFamily: 'verdana',
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
    marginBottom: 20,
  },
  iconItem: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 100,
    padding: 5,
    paddingLeft: 15,
  },
  viewPayment: {
    flexDirection: 'row',
  },
  type: {
    marginHorizontal: 5,
    marginTop: -10,
    fontFamily: 'verdana',
    fontSize: 16,
    color: '#666666',

  },
  PaymentItem: {
    position: 'absolute',
    marginTop: -10,
    marginLeft: 10,
  }
})


