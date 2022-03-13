import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


import MapView, { Marker } from 'react-native-maps';
import { RootNavigator } from '../types/type';


interface PropsNav { 
  navigation: NativeStackNavigationProp<RootNavigator>
}
export const MapScreen = ({ navigation }: PropsNav) => {

  const [text, onChangeText] = React.useState ("Introduce tu direccion");


  const firenzeRegion1 = {
    latitude: 43.771928, 
    longitude: 11.253690, 
    latitudeDelta: 0.3, 
    longitudeDelta: 0.2
  };
  const firenzeRegion2 = {
    latitude: 43.771123710336425, 
    longitude: 11.252113759581313,
  };
  const firenzeRegion3 = {
    latitude: 43.773830, 
    longitude: 11.250500, 
  };
  const firenzeRegion4 = {
    latitude: 43.775712479629114, 
    longitude: 11.253954683172513, 
  };
  const firenzeRegion5 = {
    latitude: 43.770886, 
    longitude: 11.257806, 
  };


  return ( 
      <View style={{ flex: 1, backgroundColor: '#ffd338' }}>
      
        <TextInput
          style={s.input}
          onChangeText={onChangeText}
          value={text}       
        />

        <MapView 
          style={{flex: 1}}
          region={firenzeRegion1}
          zoomEnabled={true} 
          scrollEnabled={true}
          showsScale={true}
          >
          <Marker 
            coordinate={firenzeRegion1} 
            image={require("../assets/images/logo.png")} 
            title={"Store 1"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
            onPress={() => navigation.navigate('Home')}/>

          <Marker 
            coordinate={firenzeRegion2} 
            image={require("../assets/images/logo.png")} 
            title={"Store 2"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
            onPress={() => navigation.navigate('Home')} />
          <Marker 
            coordinate={firenzeRegion3} 
            image={require("../assets/images/logo.png")} 
            title={"Store 3"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
            onPress={() => navigation.navigate('Home')} />
          <Marker 
            coordinate={firenzeRegion4} 
            image={require("../assets/images/logo.png")} 
            title={"Store 4"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
            onPress={() => navigation.navigate('Home')} />
          <Marker 
            coordinate={firenzeRegion5} 
            image={require("../assets/images/logo.png")} 
            title={"Store 5"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
            onPress={() => navigation.navigate('Home')} />
        </MapView>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')} >
          <Text style={s.productText}>Product</Text>
        </TouchableOpacity>
  
        
      </View>
 
    
  )
}

const s = StyleSheet.create({

  input: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderRadius: 6,
    height: 40,
    margin: 12,
    fontFamily: 'Verdana',
    fontSize: 15,
    //backgroundColor:'#fbc531'

  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#ffd338",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  text: {
  color: "#fff",   
  },
  productText: {
    textAlign: 'center',
    fontFamily: 'verdana',
    //fontWeight: 'bold',
    fontSize: 20,
    

    color: '#ffffff',
  },
});
