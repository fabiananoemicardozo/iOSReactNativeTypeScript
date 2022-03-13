import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootNavigator } from '../types/type';
import { HomeScreen } from '../screens/HomeScreen';
import { MapScreen } from '../screens/MapScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator<RootNavigator>()

export const NavigationStack = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />  
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }  

export const DetailsStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>       
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AddModal" component={MapScreen} />
      </Stack.Navigator>
    );
  } 