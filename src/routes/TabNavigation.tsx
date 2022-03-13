import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { MapScreen } from '../screens/MapScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {


  return (

    <Tab.Navigator 
    initialRouteName={"Home"} 
    screenOptions={{
      headerShown: false
    }}      
    >
  
    <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
    />
    <Tab.Screen 
        name="Favorite" 
        component={FavoriteScreen}
        options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cards-heart" color={color} size={size} />
            ),
          }}
    />      
    <Tab.Screen 
        name="Map" 
        component={MapScreen}
        options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker" color={color} size={size} />
            ),
          }}
    /> 
        <Tab.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
    /> 

  </Tab.Navigator>

  );
} 