
import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';


import { Text } from 'react-native';
import { TabNavigation } from './src/routes/TabNavigation';


const App = () => {
  

  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  );
};

export default App;
