import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
<NavigationContainer>
  <StatusBar backgroundColor="lightgreen" barStyle="dark-content"></StatusBar>
  <Routes/>
</NavigationContainer>
  
  );
}
