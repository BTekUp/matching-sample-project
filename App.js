import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainTabScreen from './src/app/screens/MainTabScreen';
import RootStackScreen from './src/app/screens/RootStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      
      <MainTabScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
